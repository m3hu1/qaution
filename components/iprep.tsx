import React from "react";

interface IpRepDataProps {
  ipRepData?: {
    data: {
      ipAddress: string;
      isPublic: boolean;
      ipVersion: number; // isko check karna hai bhai
      isWhitelisted: boolean | null;
      abuseConfidenceScore: number;
      countryCode: string;
      usageType: string;
      isp: string;
      domain: string;
      hostnames: string[];
      isTor: boolean;
      totalReports: number;
      numDistinctUsers: number;
      lastReportedAt: string | null;
    };
  } | null;
}
// props ko update karna hai 

const IpRepData: React.FC<IpRepDataProps> = ({ ipRepData }) => {
  return (
    <div className="ip-rep-data-container">
      {ipRepData && (
        <div className="mt-10 ip-rep-results text-center">
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate underline">
            IP Address: {ipRepData.data.ipAddress || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Is Public: {ipRepData.data.isPublic ? "Yes" : "No"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            IP Version: {ipRepData.data.ipVersion || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Is Whitelisted: {ipRepData.data.isWhitelisted !== null ? (ipRepData.data.isWhitelisted ? "Yes" : "No") : "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Abuse Confidence Score: {ipRepData.data.abuseConfidenceScore || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Country Code: {ipRepData.data.countryCode || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Usage Type: {ipRepData.data.usageType || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            ISP: {ipRepData.data.isp || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Domain: {ipRepData.data.domain || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Total Reports: {ipRepData.data.totalReports || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Number of Distinct Users: {ipRepData.data.numDistinctUsers || "N/A"}
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Last Reported At: {ipRepData.data.lastReportedAt || "N/A"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default IpRepData;