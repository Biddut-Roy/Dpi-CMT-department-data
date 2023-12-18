// import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
import axios from "axios";


const Register = () => {
    // const navigate = useNavigate()
    const IMG_IMG_HOSTING = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY_IMGBB}`
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const imgFile = { image: data.image[0] }
console.log(data)
        // const res = await axios.post(IMG_IMG_HOSTING, imgFile, {
        //     headers: { "content-type": "multipart/form-data" }
        // })
        
        // if (res.data.success) {
        //     createUser(data?.email, data?.password)
        //         .then(() => {
        //             userUpdateProfile(data?.firstName, res.data?.data?.display_url)
        //                 .then(() => {
        //                     const userData = {
        //                         email: data?.email,
        //                         name: data?.firstName,
        //                     }
        //                     publicAxios.post('/users', userData)
        //                         .then(res => {
        //                             console.log(res.data);
        //                             if (res.data._id) {
        //                                 reset()
        //                                 navigate("/CreateShop")
        //                                 Swal.fire({
        //                                     title: "registered successfully ",
        //                                     showClass: {
        //                                         popup: `
        //                                         animate__animated
        //                                         animate__fadeInUp
        //                                         animate__faster
        //                                     `
        //                                     },
        //                                     hideClass: {
        //                                         popup: `
        //                                     animate__animated
        //                                     animate__fadeOutDown
        //                                     animate__faster
        //                                 `
        //                                     }
        //                                 });

        //                             }
        //                         })

        //                 })
        //                 .catch(() => { })
        //         })
        //         .catch((error) => {
        //             console.log(error.message);
        //         });
        // }

    }


    return (
        <>
            <Helmet>
                <title>CMT || REGISTER</title>
                <link rel="canonical" />
            </Helmet>
            <div className="hero min-h-screen w-full mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className=" grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("firstName", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.firstName?.type === "required" && (
                                        <p className=" text-red-400">First name is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Roll</span>
                                    </label>
                                    <input type="number" {...register("roll", { required: true })} placeholder="Roll" className="input input-bordered" />
                                    {errors.roll?.type === "required" && (
                                        <p className=" text-red-400">roll is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Group</span>
                                    </label>
                                    <select {...register("group", { required: true })}>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Shift</span>
                                    </label>
                                    <select {...register("shift", { required: true })}>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Photo</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} className="input-bordered" />
                                    {errors.firstName?.type === "image" && (
                                        <p className=" text-red-400">photo is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Passing Year</span>
                                    </label>
                                    <input type="number" name="year" {...register("year")} placeholder="2021" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", {
                                        required: true, minLength: 6, maxLength: 20,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "minLength" && (
                                        <p className=" text-red-400">password must be 6 character</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className=" text-red-400">password must 1 uppercase 1 lowercase or special character and number </p>
                                    )}

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary bg-blue-800 " value="Register" />
                            </div>
                            <p>Already have a account. Please <Link to={"/login"}><span className=" text-blue-500">Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;