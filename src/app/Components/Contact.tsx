
import { Input } from "@nextui-org/input";
import { IoPersonOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
import { Textarea } from "@nextui-org/input";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


export default function Contact() {
    return (


        <>
            <section className=" dark:bg-black bg-white relative z-10 -mt-24 py-24">
                <div className=" max-w-7xl mx-5 xl:mx-auto bg-[#d1d1d1] dark:bg-white rounded-3xl py-20 px-5 md:px-10">
                    <h2 className=" text-5xl text-black font-bold text-center">Contact Me</h2>

                    <form>
                        <div className=" space-y-5 mt-10">
                            {/* 1st*/}
                            <div className=" flex md:flex-row flex-col  justify-between gap-5">
                                <Input
                                    type="name"

                                    placeholder="Full Name *"

                                    className=" outline-none border-1 border-[#d4d4d4] rounded-2xl  text-[#65656D]  "
                                    classNames={{ inputWrapper: 'bg-transparent h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent ', input: 'group[data-has-value="true"] group-data-[has-value=true]:text-default-100  text-sm ',
                                         innerWrapper: ' gap-x-2  !py-3 h-auto'
                                     }}
                                    startContent={
                                        <IoPersonOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                {/* email */}
                                <Input
                                    type="email"

                                    placeholder="Email *"
                                    className=" outline-none border-1 border-[#d4d4d4] rounded-2xl  "
                                    classNames={{ inputWrapper: 'bg-transparent h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent ', input: ' group[data-has-value="true"] group-data-[has-value=true]:text-default-100   text-sm ',
                                         innerWrapper: ' !py-3 gap-x-2'
                                     }}
                                    startContent={
                                        <LuMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                            </div>
                            {/* 2nd */}
                            <div className="flex md:flex-row flex-col  justify-between gap-5">
                                <Input
                                    type="number"

                                    placeholder="Mobile No *"

                                    className=" outline-none border-1 border-[#d4d4d4] rounded-2xl   "
                                    classNames={{ inputWrapper: 'bg-transparent h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent ', input: ' group[data-has-value="true"] group-data-[has-value=true]:text-default-100   text-sm ',
                                         innerWrapper: ' gap-x-2 !py-3'
                                     }}
                                    startContent={
                                        <HiOutlineDevicePhoneMobile className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                {/* subject */}
                                <Input
                                    type="text"

                                    placeholder="Subject *"
                                    className=" outline-none border-1 border-[#d4d4d4] rounded-2xl   "
                                    classNames={{ inputWrapper: 'bg-transparent h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent, data-[hover=true]:bg-transparent ', input: ' text-sm group[data-has-value="true"] group-data-[has-value=true]:text-default-100 ',
                                         innerWrapper: ' gap-x-2 !py-3',
                                         
                                     }}
                                // startContent={
                                //     <LuMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                // }
                                />
                            </div>
                            {/* detail message */}
                            <Textarea
                                type="text"

                                placeholder="Message *"
                                rows={8}
                                className=" outline-none border-1 border-[#d4d4d4] rounded-2xl  text-base "
                                classNames={{ inputWrapper: 'bg-transparent h-auto group[data-focus="true"] group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent ', input: '   py-2 text-sm !text-default-100 group[data-has-value="true"] group-data-[has-value=true]:text-default-100 ' ,
                                   
                                 }}
                            // startContent={
                            //     <LuMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            // }
                            />

                        </div>

                    </form>
                </div>
            </section>




        </>
    )
}