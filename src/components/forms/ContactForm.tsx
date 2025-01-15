import { Button } from "../Index"

const ContactForm = () => {
    return (
        <form action="" method="POST">
            <div className="form-group">
                <label htmlFor="" className="label">Your name</label>
                <input type="text" name="" id="" className="form-control h-9" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="label">Email address</label>
                <input type="email" name="" id="" className="form-control h-9" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="label">Subject</label>
                <input type="text" name="" id="" className="form-control h-9" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="label">Message</label>
                <textarea name="" id="" className="form-control" rows={5}></textarea>
            </div>
            <Button type="submit" classes="bg-primary text-white rounded-sm px-10 py-1 w-full md:w-fit mt-3"> Submit</Button>
        </form>
    )
}

export default ContactForm