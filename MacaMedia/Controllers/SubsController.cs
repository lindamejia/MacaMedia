using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using maca.Models.Request;
using MacaMedia.Models;
using MacaMedia.Models.Request;
using MacaMedia.Models.WebModels;
using Microsoft.AspNetCore.Mvc;

namespace MacaMedia.Controllers
{
    [Route("api/subscriptions")]
    [ApiController]
    public class SubsController : ControllerBase
    {

        private readonly string connectionString = "server=ISAMARMEJIA94A6\\SQLEXPRESS;Database=Maca;Trusted_Connection=True;";

        [HttpGet]
        public ActionResult<Response<List<Subscriptions>>> GetAll()
        {

            Response<List<Subscriptions>> response = null;
            List<Subscriptions> list = null;

            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("dbo.Subscriptions_SelectAll", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Subscriptions subscriber = new Subscriptions();

                        subscriber.Id = Convert.ToInt32(rdr["Id"]);
                        subscriber.Name = rdr["Name"].ToString();
                        subscriber.Email = rdr["Email"].ToString();


                        if (list == null)
                        {
                            list = new List<Subscriptions>();

                        }
                        list.Add(subscriber);
                    }
                    con.Close();
                }

                if (list != null)
                {
                    response = new Response<List<Subscriptions>>(list);
                    return Ok(response);
                }

                return BadRequest("Booo...");
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        [HttpPost]
        public int Insert(SubscriptionAddRequest subscriber)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                int id = 0;
                SqlCommand cmd = new SqlCommand("dbo.Subscriptions_Insert", con);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter outPutVal = new SqlParameter("@Id", SqlDbType.Int);

                {
                    // define parameters and their values
                    outPutVal.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(outPutVal);

                    cmd.Parameters.Add("@Name", SqlDbType.VarChar, 100).Value = subscriber.Name;
                    cmd.Parameters.Add("@Email", SqlDbType.VarChar, 100).Value = subscriber.Email;



                    // open connection, execute INSERT, close connection
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                if (outPutVal.Value != DBNull.Value) id = Convert.ToInt32(outPutVal.Value);
                return id;
            }
        }

        [HttpPut("{id:int}")]
        public void Update(SubscriptionUpdateRequest subscriber)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {

                SqlCommand cmd = new SqlCommand("dbo.Subscriptions_Update", con);
                cmd.CommandType = CommandType.StoredProcedure;
                {
                    cmd.Parameters.Add("@Id", SqlDbType.Int).Value = subscriber.Id;
                    cmd.Parameters.Add("@Name", SqlDbType.VarChar, 100).Value = subscriber.Name;
                    cmd.Parameters.Add("@Email", SqlDbType.VarChar, 100).Value = subscriber.Email;


                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }

            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<Response<Subscriptions>> GetById(int id)
        {
            Response<Subscriptions> response = null;
            Subscriptions subscriber = null;

            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("dbo.Subscriptions_SelectById", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add("@Id", SqlDbType.Int).Value = subscriber.Id;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        subscriber.Name = rdr["Name"].ToString();
                        subscriber.Email = rdr["Email"].ToString();

                        //if (subscriber == null)
                        //{
                        //    subscriber = new Subscriptions();

                        //}
                        //return subscriber;
                    }

                    con.Close();
                }

                if (subscriber != null)
                {

                    response = new Response<Subscriptions>(subscriber);
                    return Ok(response);
                }

                return BadRequest("Booo...");
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        [HttpGet("{id:int}")]
        public void Delete(int id)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {

                SqlCommand cmd = new SqlCommand("dbo.Subscriptions_Delete", con);
                cmd.CommandType = CommandType.StoredProcedure;
                {
                    Subscriptions subscriber = new Subscriptions();
                    cmd.Parameters.Add("@Id", SqlDbType.Int).Value = subscriber.Id;

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }

            }
        }


        [HttpGet("ping")]
        public ActionResult<string> Ping()
        {

            return Ok("Hello world");
        }



    }


}
