import { Button } from "../Index"

const LoginForm = () => {
    return (
        <form>
            <div className="form-group">
                <label
                    className="label"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div className="form-group">
                <label
                    className="label"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>

            <Button type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2">Login</Button>
        </form>
    )
}

export default LoginForm