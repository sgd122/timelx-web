const API_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const API_QA_URL: string =
  process.env.NEXT_PUBLIC_BASE_QA_URL || 'http://localhost:3000';
const S3_URL: string | undefined = process.env.NEXT_PUBLIC_S3_URL;

export { API_URL, API_QA_URL, S3_URL };
