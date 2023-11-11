import React from "react";
import SelectedValue from "../SelectedValue";
import Input from "../Input";
import CheckBox from "../CheckBox";

const Notifications = ({theme}) => {
  return (
    <div>
      <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
            <Input lebel={"Push Notification Icon"} type={"file"} />
            <SelectedValue lebel={"Image Moderation"} option={["-----", "Webpushr", "OneSignal"]} />

            <Input
              lebel={"Webpushr Public Key"}
              defaultValue={
                "BDB9YyMmPZm-jjwmRYvlWW0KI9qV3RGmmhe_jNEAbK1e8c7YRaCp26-xRCvHSwqn5CSGwfDBRJO1Ftly4FjlSKk"
              }
              type={"text"} />
            <Input
              lebel={"Webpushr REST API Key"}
              defaultValue={"e27f83415dac651ca1fad46d4f11ae10"}
              type={"text"}
            />
            <Input
              lebel={"Webpushr Authentication Token"}
              defaultValue={"46537"}
              type={"text"}
            />

            <CheckBox
              lebel={"Send Push Notification"}
              checkName={[
                "Someone send a Private Message",
                "Someone send a Private Message when Offline",
                "Someone send a Friend Request",
                "Someone mentions user in Group Chat",
                "Someone replies to the user messages (Group Chat)",
              ]}
              defaultCheck={true}
            />
            <CheckBox
              lebel={"Send Email Notification"}
              checkName={[
                "Someone send a Private Message when Offline",
                "Someone send a Friend Request",
                "New user signup pending approval",
              ]}
              defaultCheck={false}
            />
            <CheckBox
              lebel={"Site Notifications"}
              checkName={[
                "Someone mentions user in Group Chat",
                "Someone send an invitation to join a group",
                "User awarded with new badge",
                "Someone replies to the user messages (Group Chat)",
              ]}
              defaultCheck={true}
            />
            <CheckBox
              lebel={"System Messages (Groups)"}
              checkName={[
                "On Group Creation",
                "Someone joins Group Chat",
                "Someone removed from Group",
                "Someone leaves Group Chat",
                "Group awarded with new badge",
                "Someone banned from Group",
                "Someone unbanned from Group",
                "Someone temporarily banned from Group",
                "Updating Group Information",
                "When Changing Group Role",
              ]}
              defaultCheck={true}
            />
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

export default Notifications;
