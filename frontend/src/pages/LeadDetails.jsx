import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LeadDetails = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/leads/${id}`)
      .then(res => setLead(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!lead) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lead Details</h1>
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
      <p><strong>Stage:</strong> {lead.stage}</p>
    </div>
  );
};

export default LeadDetails;
