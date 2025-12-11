import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

        if (!clientEmail || !privateKey || !spreadsheetId) {
            console.error("Missing Google Sheets credentials");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:C", // Assuming Sheet1 and columns A, B, C
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[name, email, message, new Date().toISOString()]],
            },
        });

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
