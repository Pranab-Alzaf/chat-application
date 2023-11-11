import React from "react";
import SelectedValue from "../SelectedValue";
import Input from "../Input";

const LoginSetting = ({theme}) => {
  return (
<div>
  <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
            <SelectedValue lebel={"User Registration"} option={["-----", "Enable", "Disable"]}/>
            <SelectedValue lebel={"Guest Login"} option={["-----", "Enable", "Disable"]} />
            <SelectedValue lebel={"User Email Verification"} option={["-----", "Enable", "Disable"]} />
            <SelectedValue lebel={"New User Approval"} option={["-----", "Enable", "Disable"]} />
            <Input lebel={"Login Cookie Validity (Days)"} defaultValue={30} type={"number"} />
            <SelectedValue lebel={"Enable Photo upload on Signup"} option={["-----", "Yes", "No", "requird"]} />
            <SelectedValue lebel={"Enable Photo upload on Signup"} option={["-----","Disable","hCapcha","gCapcha","CloudFlare Truniste",]}/>
            <Input lebel={"Captcha Site Key"} type={"text"} />
            <Input lebel={"Captcha Secret Key"} type={"text"} />
            <Input lebel={"Minimum Username Length"} type={"number"} />
            <Input lebel={"Maximum Username Length"} defaultValue={30} type={"number"} />
            <Input lebel={"Minimum Guest Nickname Length"} defaultValue={5} type={"number"} />
            <Input lebel={"Maximum Guest Nickname Length"} defaultValue={30} type={"number"} />
            <Input lebel={"Minimum Full Name Length"} defaultValue={5} type={"number"} />
            <Input lebel={"Maximum Full Name Length"} defaultValue={30} type={"number"} />
            <SelectedValue lebel={"Hide Name Field in Registration Page"} option={["-----", "yes", "no"]}/>
            <SelectedValue lebel={"Hide Email Address Field in Registration Page"} option={["-----", "yes", "no"]}/>
            <SelectedValue lebel={"Hide Username Field In Registration Page"} option={["-----", "yes", "no"]} />
            <SelectedValue lebel={"Hide Phone Number Field in Registration Page"} option={["-----", "yes", "no"]} />
            <SelectedValue lebel={"Gravatar"} option={["-----", "enable", "disable"]} />
            <SelectedValue lebel={"Entry Page Background"} option={["-----", "slideShow", "static image"]} />
            <SelectedValue lebel={"Allow Guest Users to Create Accounts"} option={["-----", "yes", "no"]} />
            <SelectedValue lebel={"Open Guest Login Window on Load (Login Page)"} option={["-----", "enable", "disable"]} /> <Input lebel={"Custom Login URL"} type={"text"} />
            <Input lebel={"Custom URL on Logout"} type={"text"} />
            <Input lebel={"Maximum Login Attempts"} defaultValue={10} type={"number"} />
            <SelectedValue lebel={"SameSite Cookies"} option={["-----", "Default", "none", "Strict", "Lax"]} />
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

export default LoginSetting;
