import React from "react"

const Form=()=>{
    return (
      <div>
        <h1>Form</h1>
        <label>FirstName:</label>
        <input type="text" placeholder="FirstName" required />
        <br></br>
        <label>LastName</label>
        <input type="text" placeholder="LastName" required />
        <br></br>
        <label>Birthdate</label>
        <input type="date" />
        <br></br>
        <label>Email</label>
        <input type="email" placeholder="email" required />
        <br></br>
        <label>Password</label>
        <input type="password" placeholder="password" />
        <br></br>
        <label>UserName</label>
        <input type="usename" placeholder="username" />
        <br></br>
        <label>Gender</label>
        <br></br>
        <label>Male</label>
        <input type="radio" value="Male" name="male" />
        <br></br>
        <label>Female</label>
        <input type="radio" value="Female" />
        <br></br>
        <label>Subjects</label>
        <select>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
          <option value="react">react</option>
        </select><br></br>
        <label>comment</label><br></br>
        < input textarea="message"/><br></br>
        <button>Submit</button><br></br>
        <button onClick="alert{'hii'}">Help</button>
      </div>
    );
}
export default Form