import { Button } from "../Index"

const RegisterForm = () => {
  return (
    <form action="" method="POST">
    <div className="form-group">
      <label className="label" htmlFor="name">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="form-control h-9"
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="form-control h-9"
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        className="form-control h-9"
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="phone">
        Phone Number
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        className="form-control h-9"
      />
    </div>
    <Button type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2">Register</Button>
  </form>
  )
}

export default RegisterForm