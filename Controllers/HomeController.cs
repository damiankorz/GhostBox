﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GhostBox.Models;

namespace GhostBox.Controllers
{
    public class HomeController : Controller
    {
        //GET: /
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}