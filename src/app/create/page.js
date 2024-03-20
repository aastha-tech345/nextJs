"use client";
import Link from "next/link";
import React from "react";
const Page = () => {
  const [data, setData] = React.useState({
    name: "",
    clas: "",
    subject: "",
    collage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveData = async () => {
    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("res", res);
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <input
              className="form-control"
              name="name"
              value={data.name}
              placeholder="name"
              type="text"
              onChange={handleChange}
            />
            <br />
            <input
              className="form-control"
              name="clas"
              value={data.clas}
              onChange={handleChange}
              type="text"
              placeholder="class"
            />
            <br />
            <select
              className="form-control"
              name="subject"
              value={data.subject}
              onChange={handleChange}
            >
              <option value="Btech">B.Tech</option>
              <option value="BA">BA</option>
              <option value="BSC">BSC</option>
            </select>
            <br />
            <input
              className="form-control"
              name="collage"
              type="text"
              value={data.collage}
              onChange={handleChange}
              placeholder="collage"
            />
            <br />
            <button
              onClick={saveData}
              className="btn btn"
              style={{ background: "blue" }}
            >
              save
            </button>
            {/* <Link to="/dashboard">
              {" "}
              <button className="btn btn" style={{ background: "red" }}>
                Record Listing
              </button>
            </Link> */}
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
