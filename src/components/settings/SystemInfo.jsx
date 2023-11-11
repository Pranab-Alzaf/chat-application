import React from "react";
import Input from "../Input";

const SystemInfo = ({System,theme}) => {
  return (
    <div>
      <div>
        <div className={`w-full bg-white mx-auto h-[500px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-500":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
            <Input lebel={"Script Version"} defaultValue={3.4} disabled={true} type={"number"}/>
            <Input lebel={"PHP Version"} defaultValue={"8.0.29"} disabled={true} type={"number"}/>
            <Input lebel={"Server Software"} defaultValue={"nginx/1.24.0"} disabled={true} type={"text"}/>
            <Input lebel={"File Permission"} defaultValue={"Writable"} disabled={true} type={"text"}/>
            <Input lebel={"Upload Max Filesize"} defaultValue={"200M"} disabled={true} type={"text"}/>
            <Input lebel={"Post Max Size"} defaultValue={"200M"} disabled={true} type={"text"}/>
            <Input lebel={"Max File Uploads"} defaultValue={20} disabled={true} type={"number"}/>
            <Input lebel={"Memory Limit"} defaultValue={"512M"} disabled={true} type={"text"}/>
            <Input lebel={"Max Input Vars"} defaultValue={1000} disabled={true} type={"number"}/>
            <Input lebel={"PDO PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"PDO MySQL PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"cURL PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"DOM PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"OpenSSL PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"MBString PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"Exif PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"IMAP PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"}/>
            <Input lebel={"PCRE PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"} />
            <Input lebel={"GD PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"} />
            <Input lebel={"Zip PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"} />
            <Input lebel={"FileInfo PHP Extension"} defaultValue={"Enabled"} disabled={true} type={"text"} />
            <Input lebel={"Json PHP Extension"} defaultValue={"Enabled"}  disabled={true}  type={"text"} />
            <Input lebel={"allow_url_fopen"}  defaultValue={"Enabled"}  disabled={true} type={"text"} />
            <Input lebel={"Output Buffering"} defaultValue={"Enabled"} disabled={true} type={"text"} />
            <Input lebel={"Imagick"} defaultValue={"Enabled"} disabled={true} type={"text"} />
          </div>
          <div className={`${theme ? "bg-slate-300":"bg-white"} flex justify-end gap-5 py-4 pr-3`}>
            <button className="font-bold border px-4 rounded">Cancel</button>
            <button className={`${System ? "hidden":"block"} bg-primary px-6 py-1 text-white rounded`}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
