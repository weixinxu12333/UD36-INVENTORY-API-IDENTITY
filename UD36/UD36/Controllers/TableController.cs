using Microsoft.AspNetCore.Mvc;

namespace UD36.Controllers
{
    public class TableController : Controller
    {
        public IActionResult Table()
        {
            return View();
        }
    }
}
