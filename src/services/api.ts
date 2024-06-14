// src/components/api.ts
import { Patient } from "@/types/Patient";
import axios from "axios";

let username = "coalition";
let password = "skills-test";
let auth = btoa(`${username}:${password}`);
export async function fetchPatientData(): Promise<Patient[]> {
  try {
    const response = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return [];
  }
}
