using MacaMedia.Models;
using MacaMedia.Models.Request;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MacaMedia.Services
{
    public class SubscriptionServices
    {
        private readonly string connectionString = "server=ISAMARMEJIA94A//SQLEXPRESS;initial catalog=Maca;user id=Maca_User;pwd=Password1!";

        //private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        //private IConfiguration configuration;

        //public SubscriptionServices(IConfiguration _configuration)
        //{
        //    configuration = _configuration;
        //}

    }
}

