import axios from "axios";

const API_URL = "http://localhost/backend-prj/api"; // ton dossier PHP API

export const getRendezvous = () => axios.get(`${API_URL}/list_rendez_vous.php`);
export const getMessages = () => axios.get(`${API_URL}/list_msg.php`);
