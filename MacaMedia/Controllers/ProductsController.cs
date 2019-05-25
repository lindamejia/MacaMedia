using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MacaMedia.Models;
using MacaMedia.Models.Request;
using MacaMedia.Models.WebModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MacaMedia.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly string connectionString = "server=ISAMARMEJIA94A6\\SQLEXPRESS;Database=Maca;Trusted_Connection=True;";

        [HttpGet]
        public ActionResult<Response<List<Products>>> GetAll()
        {

            Response<List<Products>> response = null;
            List<Products> list = null;

            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("dbo.Products_SelectAll", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Products products = new Products();

                        products.Id = Convert.ToInt32(rdr["Id"]);
                        products.Image = rdr["Image"].ToString();
                        products.Name = rdr["Name"].ToString();
                        products.Price = Convert.ToInt32(rdr["Price"]);
                        products.Quantity = Convert.ToInt32(rdr["Quantity"]);
                        products.Size = rdr["Size"].ToString();
                        products.Color = rdr["Color"].ToString();


                        if (list == null)
                        {
                            list = new List<Products>();

                        }
                        list.Add(products);
                    }
                    con.Close();
                }

                if (list != null)
                {
                    response = new Response<List<Products>>(list);
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
        public int Insert(ProductsAddRequest products)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                int id = 0;
                SqlCommand cmd = new SqlCommand("dbo.Products_Insert", con);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter outPutVal = new SqlParameter("@Id", SqlDbType.Int);

                {
                    // define parameters and their values
                    outPutVal.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(outPutVal);

                    cmd.Parameters.Add("@Image", SqlDbType.VarChar, 100).Value = products.Image;
                    cmd.Parameters.Add("@Name", SqlDbType.VarChar, 100).Value = products.Name;
                    cmd.Parameters.Add("@Price", SqlDbType.Int).Value = products.Price;
                    cmd.Parameters.Add("@Quantity", SqlDbType.Int).Value = products.Quantity;
                    cmd.Parameters.Add("@Size", SqlDbType.VarChar, 50).Value = products.Size;
                    cmd.Parameters.Add("@Color", SqlDbType.VarChar, 100).Value = products.Color;

                    // open connection, execute INSERT, close connection
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                if (outPutVal.Value != DBNull.Value) id = Convert.ToInt32(outPutVal.Value);
                return id;
            }
        }

        //[HttpPut("{id:int}")]
        //public void Update(SubscriptionUpdateRequest subscriber)
        //{
        //    using (SqlConnection con = new SqlConnection(connectionString))
        //    {

        //        SqlCommand cmd = new SqlCommand("dbo.Subscriptions_Update", con);
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        {
        //            cmd.Parameters.Add("@Id", SqlDbType.Int).Value = subscriber.Id;
        //            cmd.Parameters.Add("@Name", SqlDbType.VarChar, 100).Value = subscriber.Name;
        //            cmd.Parameters.Add("@Email", SqlDbType.VarChar, 100).Value = subscriber.Email;


        //            con.Open();
        //            cmd.ExecuteNonQuery();
        //            con.Close();
        //        }

        //    }
        //}

       

        [HttpGet("{id:int}")]
        public ActionResult<Response<Products>> GetById(int id)
        {
            Response<Products> response = null;
            Products _product = null;

            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("dbo.Products_SelectById", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add("@Id", SqlDbType.Int).Value = _product.Id;
                    Products product = new Products();

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                   

                    while (rdr.Read())
                    {
                        Products product = new Products();
                        product.Id = Convert.ToInt32(rdr["Id"]);
                        product.Image = rdr["Image"].ToString();
                        product.Name = rdr["Name"].ToString();
                        product.Price = Convert.ToInt32(rdr["Price"]);
                        product.Quantity = Convert.ToInt32(rdr["Quantity"]);
                        product.Size = rdr["Size"].ToString();
                        product.Color = rdr["Color"].ToString();
                        


                    }

                    con.Close();
                }

                if (_product != null)
                {

                    response = new Response<Products>(_product);
                    return Ok(response);
                }

                return BadRequest("Booo...");
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        //[HttpGet("{id:int}")]
        //public void Delete(int id)
        //{
        //    using (SqlConnection con = new SqlConnection(connectionString))
        //    {

        //        SqlCommand cmd = new SqlCommand("dbo.Subscriptions_Delete", con);
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        {
        //            Subscriptions subscriber = new Subscriptions();
        //            cmd.Parameters.Add("@Id", SqlDbType.Int).Value = subscriber.Id;

        //            con.Open();
        //            cmd.ExecuteNonQuery();
        //            con.Close();
        //        }

        //    }
        //}


        [HttpGet("ping")]
        public ActionResult<string> Ping()
        {

            return Ok("Hello world");
        }



    }


}