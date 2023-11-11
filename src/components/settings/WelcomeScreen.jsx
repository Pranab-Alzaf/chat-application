import React from 'react';
import Input from '../Input';
import SelectedValue from '../SelectedValue';
import TextArea from '../TextArea';

const WelcomeScreen = ({theme}) => {
    return (
        <div>
        <div>
    <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
        <div className={`${theme ? "bg-slate-300":"bg-gray-50"} border border-gray-200 mt-2 pb-2`}>
     <SelectedValue lebel={"Phone Number Verification"} option={[ "-----","English"]} />
     <Input lebel={"Image"} type={"file"} />
     <TextArea lebel={'Heading'} defaultValue={'Hello, and a warm welcome to you'}/>
     <TextArea lebel={'Welcome Message'} defaultValue={"Share what's on your mind with other people from all around the world to find new friends"}/>
     <TextArea lebel={'Footer Text'} defaultValue={'By accessing this website, you are agreeing to be bound by the Terms and Conditions of Use'}/>
    </div>
          <div className={`${theme ? "bg-slate-300":"bg-white"} flex justify-end gap-5 py-4 pr-3`}>
     <button className="font-bold border px-4 rounded">Cancel</button>
     <button className="bg-primary px-6 py-1 text-white rounded">
       Update
     </button>
   </div>
 </div>
</div>
   </div>
    );
};

export default WelcomeScreen;