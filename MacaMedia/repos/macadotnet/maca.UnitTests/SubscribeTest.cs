using System;
using maca.Models.Request;
using maca.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace maca.UnitTests
{
    [TestClass]
    public class SubscribeTest
    {
        [TestMethod]
        public void Insert_Test()
        {
            SubscribeAddRequest model = new SubscribeAddRequest
            {
                Name = "Johnny",
                Email = "Johnny@dispostable.com"

            };

            SubscribeService svc = new SubscribeService();
            int result = svc.Insert(model);

            Assert.IsTrue(result > 0, "The Insert Failed!");
        }
    }
}
