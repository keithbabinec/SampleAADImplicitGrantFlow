﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TestAuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        // this is a sample endpoint that requires 'AdminUser' role access,
        // as defined in the AAD app registration manifest and assigned via AAD
        // users and groups.
        [HttpGet()]
        [Route("admin")]
        [Authorize(Roles = "AdminUser")]
        public async Task<ActionResult<string>> AdminRoleGet()
        {
            return Ok("Successfully called the api/test/admin endpoint.");
        }

        // this is a sample endpoint that requires 'StandardUser' role access,
        // as defined in the AAD app registration manifest and assigned via AAD
        // users and groups.
        [HttpGet()]
        [Route("standard")]
        [Authorize(Roles = "StandardUser")]
        public async Task<ActionResult<string>> StandardRoleGet()
        {
            return Ok("Successfully called the api/test/standard endpoint.");
        }

        // this is a sample endpoint that requires no authentication at all.
        // it is wide open to the public internet.
        [HttpGet()]
        [Route("noauth")]
        public async Task<ActionResult<string>> NoAuthGet()
        {
            return Ok("Successfully called the api/test/noauth endpoint.");
        }
    }
}