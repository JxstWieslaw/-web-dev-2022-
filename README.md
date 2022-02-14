# 🤞The Web Development Bootcamp 2022🖥🔥💜
This is a documentation of all the practical and concept clearance exercises l will be doing during my web dev course.
## Race Registration HTML Form❤️‍🔥
![Race_Registration](https://user-images.githubusercontent.com/72025253/153696348-7f4390a8-5dc8-4228-b93f-8351402c763a.png)
## HTML Code✔️
Please share suggestions for code restructuring

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Race Registration</title>
  </head>
  <body>
    <h1>Race Registration!</h1>
    <form action="">
      <div>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" required />
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" required />
      </div>
      <p>Select a Race:</p>
      <div>
        <input type="radio" name="event" id="5k" value="" />
        <label for="5k">Fun Run 5k</label>
      </div>
      <div>
        <input type="radio" name="event" id="half" value="" />
        <label for="half">Half Marathon</label>
      </div>
      <div>
        <input type="radio" name="event" id="full" value="" />
        <label for="full">Full Marathon</label>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button>Register!</button>
    </form>
  </body>
</html>

````
