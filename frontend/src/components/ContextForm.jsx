export default function ContextForm() {
  
    return (
        <div className=" flex flex-col space-y-5 items-center">
            <div className="flex space-x-4 w-[100%]">
                <textarea name="" id="courseId" cols="20" rows="1" placeholder="Course" className="outline-none  resize-none p-2 rounded-lg"></textarea>
                <textarea name="" id="subjectId" cols="20" rows="1" placeholder="Subject" className="outline-none resize-none p-2 rounded-lg"></textarea>
            </div>
            <textarea name="" id="context" rows="18" className="outline-none rounded-lg block resize-none p-2.5 w-full  text-sm " placeholder="Input your context here..."></textarea>
            <button className="p-4 bg-white w-fit rounded-lg">Generate Question</button>
        </div>
    )
}

