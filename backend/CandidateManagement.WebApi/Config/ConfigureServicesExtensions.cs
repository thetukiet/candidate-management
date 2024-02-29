using System;
using System.Collections.Generic;
using System.Text;
using CandidateManagement.Data;
using CandidateManagement.Domain.Models.Auth;
using CandidateManagement.Domain.Repositories;
using CandidateManagement.Domain.Services;
using CandidateManagement.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

using Microsoft.OpenApi.Models;

namespace CandidateManagement.WebApi.Config
{
	public static class ConfigureServicesExtensions
	{
		public static void AddCustonCors(this IServiceCollection services)
		{
			services.AddCors(options =>
			options.AddPolicy("CorsPolicy",
			builder => builder
				.WithOrigins("http://localhost:8093")
				.AllowAnyMethod()
				.AllowAnyHeader()
				.SetIsOriginAllowed((host) => true)
				.AllowCredentials()
			));
		}

		public static void AddCustomJwtBearer(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddAuthorization(options =>
			{
				options.AddPolicy(CustomRoles.Admin, policy => policy.RequireRole(CustomRoles.Admin));
				options.AddPolicy(CustomRoles.User, policy => policy.RequireRole(CustomRoles.User));
			});

			services.AddAuthentication(options =>
		 {
			 options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
			 options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
			 options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
		 })
			.AddJwtBearer(configureOptions =>
			{
				configureOptions.RequireHttpsMetadata = false;
				configureOptions.SaveToken = true;
				configureOptions.TokenValidationParameters = new TokenValidationParameters
				{
					ValidIssuer = configuration["Jwt:Issuer"],
					ValidateIssuer = true,
					ValidAudience = configuration["Jwt:Audience"],
					ValidateAudience = true,
					IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"])),
					ValidateIssuerSigningKey = true,
					ValidateLifetime = true,
					ClockSkew = TimeSpan.Zero
				};
				configureOptions.Events = new JwtBearerEvents
				{
					OnTokenValidated = context =>
					{
						IJwtTokenService jwtTokenService = context.HttpContext.RequestServices.GetRequiredService<IJwtTokenService>();
						return jwtTokenService.ValidateAsync(context);
					}
				};
			});
		}

		public static void AddCustomServices(this IServiceCollection services)
		{
            // Services
			services.AddScoped<IJwtTokenService, JwtTokenService>();
			services.AddScoped<IUserService, UserService>();
			services.AddScoped<IStageService, StageService>();
            services.AddScoped<ICandidateService, CandidateService>();
			services.AddSingleton<ISecurityService, SecurityService>();

            // Repositories
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IStageRepository, StageRepository>();
			services.AddScoped<ICandidateRepository, CandidateRepository>();
			services.AddHttpContextAccessor();
		}

		public static void AddCustomOptions(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddOptions<JwtOptions>().Bind(configuration.GetSection("Jwt"));
		}

		public static void AddCustomSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
			{
				options.SwaggerDoc("v1", new OpenApiInfo
				{
					Title = "Candidate Management API Document",
					Version = "v1"
				});

				options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
				{
					Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
					Name = "Authorization",
					In = ParameterLocation.Header,
					Type = SecuritySchemeType.ApiKey,
					Scheme = "Bearer"
				});

				options.AddSecurityRequirement(new OpenApiSecurityRequirement()
								{
										{
												new OpenApiSecurityScheme
												{
														Reference = new OpenApiReference
														{
																Type = ReferenceType.SecurityScheme,
																Id = "Bearer"
														},
														Scheme = "oauth2",
														Name = "Bearer",
														In = ParameterLocation.Header,

												},
												new List<string>()
										}
								});
			});
		}

		public static void AddCustomMongoDbService(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddSingleton<IMongoClient>(s => new MongoClient(configuration.GetConnectionString("MongoDb")));
			services.AddScoped<IMongoDbContext>(s => new MongoDbContext(s.GetRequiredService<IMongoClient>(), configuration["DbName"]));
		}
	}
}
