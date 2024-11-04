import { useState } from "react";

function Reg() {
  const [user, setUser] = useState({
    name: "Good name",
    age: 1,
    gender: "male or female",
    isMarried: true,
    degree: "",
    bio: "",
  });

  const change = (e) => {
    const name = e.target.name;
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser({ ...user, [name]: val });
  };

  const formSubmit = (e) => {
    const name = e.target;
    const val = e.target;
    e.preventDefault();
    console.log('Form data:', setUser({...user ,[name]: val }));
    // alert('thanks')
    // Perform actions like API call or state update here
  }

  return (
    <>
      <div class="table-responsive container font-monospace">
        <table className="table table-sm caption-top table-bordered border-success table-hover  fs-2 shadow-lg">
          <caption className="text-center text-danger">Register Form</caption>
          <tbody className="text-center">
            <tr>
              <td className="fw-bold">Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td className="fw-bold">Age</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td className="fw-bold">Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td className="fw-bold">isMarried</td>
              <td>{user.isMarried ? "married" : "not married"}</td>
            </tr>
            <tr>
              <td className="fw-bold">Degree</td>
              <td>{user.degree}</td>
            </tr>
            <tr>
              <td className="fw-bold">Bio</td>
              <td>{user.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="color-primary shadow-sm" />

      <form className="form-label font-monospace container" onSubmit={formSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="" className="form-label">
              Name:
            </label>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter your name?"
              name="name"
              onChange={change}
            />
          </div>
          <div className="col">
            <label htmlFor="" className="form-label">
              Age:
            </label>
            <input
              className="form-control my-2"
              type="number"
              placeholder="Enter your age?"
              name="age"
              onChange={change}
            />
          </div>
        </div>

        <div className="row">
          <div className="col  my-2 ">
            <label htmlFor="male">
              <input
                className="me-2"
                type="radio"
                checked={user.gender == "Male"}
                value="Male"
                name="gender"
                onChange={change}
              />
              Male
            </label>

            <label htmlFor="female" className="px-3">
              <input
                className="me-2"
                type="radio"
                checked={user.gender == "Female"}
                value="Female"
                name="gender"
                onChange={change}
              />
              Female
            </label>
          </div>
          <div className="col my-2">
            <label htmlFor="isMarried ">
              <input
                className="me-2"
                type="checkbox"
                checked={user.isMarried}
                name="isMarried"
                onChange={change}
              />
              isMarried
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col  my-2">
            <select
              name="degree"
              id=""
              className="form-select"
              value={user.degree}
              onChange={change}
            >
              <option value="">Select your degree here..</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
              <option value="B.COM">B.COM</option>
              <option value="M.COM">M.COM</option>
              <option value="BE">BE</option>
            </select>
          </div>
        </div>

        <div className="col form-floating my-2">
          <textarea
            className="w-100 form-control"
            name="bio"
            placeholder="Write something about your self..."
            value={user.bio}
            onChange={change}
            />
          <label htmlFor="">Bio</label>
        </div>
        

        <button type="submit" className="btn btn-outline-primary my-2">
          Submit Form
        </button>
      </form>
    </>
  );
}

export default Reg;
