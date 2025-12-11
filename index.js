
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

// Table select
const table = document.querySelector('table');

// Subject ke hisab se data set
let data = [];

if (subject === "BT-101") {
    data = [
        { id: 1, data: "Unit 1 Notes.pdf", pdflink:"BT-101 Unit-1.pdf", pyq: "coming soon", ref: "Education Point", reflink: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN" },
        { id: 2, data: "Unit 2 Notes.pdf", pdflink:"BT-101 Unit-2.pdf", pyq: "coming soon", ref: "Education Point", reflink: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN" },
        { id: 3, data: "Unit 3 Notes.pdf", pdflink:"BT-101 Unit-3.pdf", pyq: "coming soon", ref: "Education Point", reflink: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN" },
        { id: 4, data: "Unit 4 Notes.pdf", pdflink:"BT-101 Unit-4.pdf", pyq: "coming soon", ref: "Education Point", reflink: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN" },
        { id: 5, data: "Unit 5 Notes.pdf", pdflink:"BT-101 Unit-5.pdf", pyq: "coming soon", ref: "Education Point", reflink: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN" },
        { id: 6, data: "Unit 6 Notes.pdf", pdflink:"BT-101 Unit-6.pdf", pyq: "coming soon", ref: "No Refference Avaliable", reflink: "#" },
    ];
} else if (subject === "BT-102") {
    data = [
        { id: 1, data: "Unit 1 Notes.pdf", pdflink:"BT-102 Unit-1.pdf", pyq: "coming soon", ref: "Your collage or notes", reflink: "#" },
        { id: 2, data: "Unit 2 Notes.pdf", pdflink:"BT-102 Unit-2.pdf", pyq:"coming soon", ref: "Your collage or notes", reflink: "#" }
    ];
} else if (subject === "BT-103") {
    data = [
        { id: 1, data: "Unit 2 Notes.pdf", pdflink:"BT-103 Unit-2.pdf", pyq: "coming soon", ref: "Your collage or notes", reflink: "#" },
        { id: 2, data: "Unit 3 Notes.pdf", pdflink:"BT-103 Unit-3.pdf", pyq:"coming soon", ref: "Your collage or notes", reflink: "#" },
        { id: 3, data: "Unit 4 Notes.pdf", pdflink:"BT-103 Unit-4.pdf", pyq:"coming soon", ref: "Your collage or notes", reflink: "#" },
    ];
} else if (subject === "BT-104") {
    data = [
        { id: 1, data: "Unit 1 Notes.pdf", pdflink:"BT-104 Unit-1.pdf", pyq: "coming soon", ref: "Your collage or notes", reflink: "#" },
        { id: 2, data: "Unit 2 Notes.pdf", pdflink:"BT-104 Unit-2.pdf", pyq:"coming soon", ref: "Your collage or notes", reflink: "#" },
        { id: 3, data: "Unit 5 Notes.pdf", pdflink:"BT-104 Unit-5.pdf", pyq:"coming soon", ref: "Your collage or notes", reflink: "#" },
    ];
} else if (subject === "BT-105") {
    data = [
        { id: 1, data: "SCALES", pdflink:"BT-105 SCALES.pdf", pyq: "coming soon", ref: "By Haider Sir", reflink: "https://www.youtube.com/watch?v=940oumABQ8k" },
        { id: 2, data: "CONIC SECTION", pdflink:"BT-105 CONIC SECTION.pdf", pyq:"coming soon", ref: "By Haider Sir", reflink: "https://www.youtube.com/playlist?list=PLqjKM28q0ywDi49l3_68v_35LK9DZmaX2" },
        { id: 3, data: "Projection of Point", pdflink:"BT-105 projection of point.pdf", pyq:"coming soon", ref: "No Refference Avaliable", reflink: "#" },
        { id: 4, data: "Projection of line", pdflink:"BT-105 projection of line.pdf", pyq:"coming soon", ref: "No Refference Avaliable", reflink: "#" },
        { id: 5, data: "Projection of Plane", pdflink:"BT-105 projection of plane.pdf", pyq:"coming soon", ref: "No Refference Avaliable", reflink: "#" },

    ];
}

if (subject) {
    document.querySelector("th").innerText = subject + " Notes";
}

// Data ko table me add karna
data.forEach((item) => {
    const nd = document.createElement("div")
    const row = document.createElement("tr");
    const a1 = document.createElement("a")
    const a2 = document.createElement("a")
    const a3 = document.createElement("a")
    const btn1 = document.createElement("button")
    // 3 columns : Notes, PYQ, Reference
    const td1 = document.createElement("td");
    td1.append(nd)
    nd.append(a1, a2)
    a1.href = item.pdflink
    a1.target = "blank"
    a2.target = "blank"
    a1.textContent = item.data;
    a2.href = item.pdflink
    a2.download = item.pdflink
    a2.append(btn1)
    btn1.textContent = "⤓"
    nd.classList = "notes-data"
    a1.classList = "pdflink link"
    a2.classList = "download link"


    const td2 = document.createElement("td");
    td2.textContent = item.pyq;

    const td3 = document.createElement("td");
    td3.append(a3)
    a3.textContent = item.ref
    a3.target = "blank"
    a3.href = item.reflink
    a3.classList = "link"

    

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.appendChild(row);
});

