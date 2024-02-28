using System;
using System.Collections.Generic;
using System.Linq;
using CandidateManagement.Domain.Repositories;
using CandidateManagement.Domain.Services;
using System.Threading.Tasks;
using CandidateManagement.Domain.Entities;
using CandidateManagement.Domain.Models.Enum;
using CandidateManagement.Domain.Payload.Requests;
using CandidateManagement.Domain.Payload.Responses;
using MongoDB.Bson;

namespace CandidateManagement.Service
{
	public class CandidateService : ICandidateService
	{
		private readonly ICandidateRepository candidateRepository;

		public CandidateService(ICandidateRepository candidateRepository)
        {
            this.candidateRepository = candidateRepository;
        }

        public async Task<CandidateResponse> GetCandidateInfo(string id)
        {
            var currentCandidate = await candidateRepository.FindByIdAsync(id);
            if (currentCandidate == null)
            {
                throw new ArgumentException("Candidate Id not found");
            }

            return new CandidateResponse(currentCandidate);
        }

        public async Task<string> MoveToStage(string candidateId, string stageCode)
        {
            var isCorrectStageCode = Enum.IsDefined(typeof(StageCode), stageCode);
            if (!isCorrectStageCode)
            {
                throw new ArgumentException("New moving stage code is not correct");
            }

            var currentCandidate = await candidateRepository.FindByIdAsync(candidateId);
            if (currentCandidate == null)
            {
                throw new ArgumentException("Candidate Id not found");
            }

            if (currentCandidate.CurrentStage.Equals(stageCode, StringComparison.OrdinalIgnoreCase))
            {
                throw new ArgumentException(
                    "The new moving stage must be different to the current stage");
            }

            currentCandidate.CurrentStage = stageCode;
            await candidateRepository.UpdateAsync(currentCandidate);

            return stageCode;
        }

        public async Task<CandidateResponse> AddNewCandidate(CreateNewCandidateRequest request)
        {
            Candidate newCandidate = null;
            BuildCandidateData(ref newCandidate, request);
            await candidateRepository.InsertOneAsync(newCandidate);

            return new CandidateResponse(newCandidate);
        }

        public async Task<CandidateResponse> UpdateCandidate(string id, CreateNewCandidateRequest request)
        {
            var currentCandidate = await candidateRepository.FindByIdAsync(id);
            if (currentCandidate == null)
            {
                throw new ArgumentException("Candidate Id not found");
            }

            BuildCandidateData(ref currentCandidate, request);
            await candidateRepository.UpdateAsync(currentCandidate);

            return new CandidateResponse(currentCandidate);
        }

        public async Task<List<CandidateResponse>> GetAll()
        {
            var allCandidates = await candidateRepository.GetAllAsync();
            return allCandidates.Select(x => new CandidateResponse(x)).ToList();
        }

        private void BuildCandidateData(ref Candidate entity, CreateNewCandidateRequest request)
        {
            if (entity == null)
            {
                entity = new Candidate
                {
                    Id = ObjectId.GenerateNewId().ToString(),
                    CurrentStage = StageCode.APPLIED.ToString()
                };
            }

            entity.Email = request.Email;
            entity.Gender = request.Gender;
            entity.Position = request.Position;
            entity.FirstName = request.FirstName;
            entity.LastName = request.LastName;
            entity.PhoneNumber = request.PhoneNumber;

        }
    }
}
