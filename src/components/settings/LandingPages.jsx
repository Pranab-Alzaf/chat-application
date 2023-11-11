import React from 'react';
import SelectedValue from '../SelectedValue';
import Input from '../Input';
import TextArea from '../TextArea';

const LandingPages = ({theme}) => {
    return (
         <div>
         <div>
         <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll`}>
         <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
         <SelectedValue lebel={"Language"} option={[ "-----","English"]}/>
         <SelectedValue lebel={"Status"} option={[ "-----","Enable","disable"]}/>
         <Input lebel={"Hero Section [Image]"} type={"file"}/>
         <SelectedValue lebel={"Hero Section [Animation]"} option={[ "-----","Enable","disable"]} />
         <TextArea lebel={"Hero Section [Heading]"} defaultValue={"Much more than just another chat site"}/>
         <TextArea lebel={"Hero Section [Description]"} defaultValue={"Private chat system for Alzaf Ltd"}/>
         <SelectedValue lebel={"Groups Section [Status]"} option={[ "-----","Enable","disable"]} />
         <TextArea lebel={"Groups Section [Heading]"} defaultValue={"Trending Groups"}/>
         <TextArea lebel={"Groups Section [Description]"} defaultValue={"Where Good conversation become great experiences"}/>
         <SelectedValue lebel={"Footer Section [Status]"} option={[ "-----","Enable","disable"]} />
         <TextArea lebel={"Footer Text"} defaultValue={"Your tursted vendor"}/>
         <TextArea lebel={"Footer Block [Heading]"} defaultValue={"Address"}/>
         <TextArea lebel={"Footer Block [Description]"} defaultValue={"Madhupur, Tangail"}/>
         <TextArea lebel={"Footer Block [Heading]]"} defaultValue={"Contact"}/>
         <TextArea lebel={"Footer Block [Description]"} defaultValue={"+880"}/>
         <TextArea lebel={"Copyright Notice"} defaultValue={"© 2021 Nexzan, Inc. All rights reserved."}/>
         <Input lebel={"Facebook URL"} defaultValue={"#facebook"} type={"text"}/>
         <Input lebel={"Instagram URL"} defaultValue={"#Instagram"} type={"text"}/>
         <Input lebel={"Twitter URL"} defaultValue={"#Twitter"} type={"text"}/>
         <Input lebel={"LinkedIn URL"} defaultValue={"#LinkedIn"} type={"text"}/>
         <Input lebel={"Twitch URL"} defaultValue={"#Twitch"} type={"text"}/>
         <SelectedValue lebel={"FAQ Section [Status]"} option={[ "-----","Enable","disable"]} />
         <TextArea lebel={"FAQ Section [Heading]"} defaultValue={"Frequently Asked Questions"}/>
         <TextArea lebel={"1 - Question"} defaultValue={"How to create an account ?"}/>
         <TextArea lebel={"Answer"} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ?"}/>
         <TextArea lebel={"2 - Question"} defaultValue={"How to Delete an account ?"}/>
         <TextArea lebel={"Answer"} defaultValue={"02 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}/>
         <TextArea lebel={"3 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"4 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"5 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"6 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"7 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"8 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"9 - Question"} />
         <TextArea lebel={"Answer"} />
         <TextArea lebel={"10 - Question"} />
         <TextArea lebel={"Answer"} />
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

export default LandingPages;