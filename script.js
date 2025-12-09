// ==================== Student Management System ====================

// Dummy Data
const dummyStudents = [
    {
        id: 1701001,
        rollNo: "2024001",
        name: "Rahul Sharma",
        class: "10",
        section: "A",
        marks: {
            mathematics: 92,
            science: 88,
            english: 85,
            social: 90,
            language: 87,
            computer: 94
        },
        totalMarks: 536,
        percentage: "89.33",
        grade: "A",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701002,
        rollNo: "2024002",
        name: "Priya Patel",
        class: "10",
        section: "A",
        marks: {
            mathematics: 95,
            science: 92,
            english: 88,
            social: 94,
            language: 90,
            computer: 96
        },
        totalMarks: 555,
        percentage: "92.50",
        grade: "A",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701003,
        rollNo: "2024003",
        name: "Amit Kumar",
        class: "10",
        section: "B",
        marks: {
            mathematics: 78,
            science: 82,
            english: 75,
            social: 80,
            language: 77,
            computer: 85
        },
        totalMarks: 477,
        percentage: "79.50",
        grade: "B",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701004,
        rollNo: "2024004",
        name: "Sneha Gupta",
        class: "9",
        section: "A",
        marks: {
            mathematics: 85,
            science: 88,
            english: 82,
            social: 86,
            language: 84,
            computer: 89
        },
        totalMarks: 514,
        percentage: "85.67",
        grade: "A",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701005,
        rollNo: "2024005",
        name: "Arjun Singh",
        class: "9",
        section: "B",
        marks: {
            mathematics: 65,
            science: 70,
            english: 68,
            social: 72,
            language: 66,
            computer: 75
        },
        totalMarks: 416,
        percentage: "69.33",
        grade: "C",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701006,
        rollNo: "2024006",
        name: "Neha Reddy",
        class: "11",
        section: "A",
        marks: {
            mathematics: 88,
            science: 90,
            english: 86,
            social: 89,
            language: 85,
            computer: 92
        },
        totalMarks: 530,
        percentage: "88.33",
        grade: "A",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701007,
        rollNo: "2024007",
        name: "Vikram Desai",
        class: "11",
        section: "B",
        marks: {
            mathematics: 55,
            science: 60,
            english: 58,
            social: 62,
            language: 56,
            computer: 65
        },
        totalMarks: 356,
        percentage: "59.33",
        grade: "D",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701008,
        rollNo: "2024008",
        name: "Anjali Mehta",
        class: "12",
        section: "A",
        marks: {
            mathematics: 96,
            science: 94,
            english: 92,
            social: 95,
            language: 93,
            computer: 98
        },
        totalMarks: 568,
        percentage: "94.67",
        grade: "A",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701009,
        rollNo: "2024009",
        name: "Rohan Verma",
        class: "12",
        section: "B",
        marks: {
            mathematics: 72,
            science: 75,
            english: 70,
            social: 74,
            language: 71,
            computer: 78
        },
        totalMarks: 440,
        percentage: "73.33",
        grade: "B",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701010,
        rollNo: "2024010",
        name: "Kavya Iyer",
        class: "8",
        section: "A",
        marks: {
            mathematics: 82,
            science: 85,
            english: 80,
            social: 83,
            language: 81,
            computer: 87
        },
        totalMarks: 498,
        percentage: "83.00",
        grade: "A",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701011,
        rollNo: "2024011",
        name: "Aditya Joshi",
        class: "8",
        section: "B",
        marks: {
            mathematics: 45,
            science: 48,
            english: 42,
            social: 50,
            language: 44,
            computer: 52
        },
        totalMarks: 281,
        percentage: "46.83",
        grade: "D",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701012,
        rollNo: "2024012",
        name: "Ishita Kapoor",
        class: "7",
        section: "A",
        marks: {
            mathematics: 78,
            science: 80,
            english: 76,
            social: 79,
            language: 77,
            computer: 82
        },
        totalMarks: 472,
        percentage: "78.67",
        grade: "B",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701013,
        rollNo: "2024013",
        name: "Karan Malhotra",
        class: "7",
        section: "B",
        marks: {
            mathematics: 32,
            science: 35,
            english: 30,
            social: 38,
            language: 33,
            computer: 40
        },
        totalMarks: 208,
        percentage: "34.67",
        grade: "F",
        status: "Fail",
        date: "11/26/2025"
    },
    {
        id: 1701014,
        rollNo: "2024014",
        name: "Riya Nair",
        class: "6",
        section: "A",
        marks: {
            mathematics: 90,
            science: 88,
            english: 85,
            social: 89,
            language: 87,
            computer: 91
        },
        totalMarks: 530,
        percentage: "88.33",
        grade: "A",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701015,
        rollNo: "2024015",
        name: "Siddharth Rao",
        class: "6",
        section: "B",
        marks: {
            mathematics: 62,
            science: 65,
            english: 60,
            social: 64,
            language: 61,
            computer: 68
        },
        totalMarks: 380,
        percentage: "63.33",
        grade: "C",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701016,
        rollNo: "2024016",
        name: "Meera Bose",
        class: "10",
        section: "C",
        marks: {
            mathematics: 91,
            science: 89,
            english: 87,
            social: 92,
            language: 88,
            computer: 93
        },
        totalMarks: 540,
        percentage: "90.00",
        grade: "A",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701017,
        rollNo: "2024017",
        name: "Aarav Khanna",
        class: "11",
        section: "C",
        marks: {
            mathematics: 68,
            science: 72,
            english: 65,
            social: 70,
            language: 67,
            computer: 74
        },
        totalMarks: 416,
        percentage: "69.33",
        grade: "C",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701018,
        rollNo: "2024018",
        name: "Diya Chatterjee",
        class: "12",
        section: "C",
        marks: {
            mathematics: 94,
            science: 96,
            english: 91,
            social: 93,
            language: 92,
            computer: 97
        },
        totalMarks: 563,
        percentage: "93.83",
        grade: "A",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701019,
        rollNo: "2024019",
        name: "Varun Saxena",
        class: "9",
        section: "C",
        marks: {
            mathematics: 58,
            science: 62,
            english: 55,
            social: 60,
            language: 57,
            computer: 64
        },
        totalMarks: 356,
        percentage: "59.33",
        grade: "D",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701020,
        rollNo: "2024020",
        name: "Tanvi Pillai",
        class: "8",
        section: "C",
        marks: {
            mathematics: 84,
            science: 86,
            english: 82,
            social: 85,
            language: 83,
            computer: 88
        },
        totalMarks: 508,
        percentage: "84.67",
        grade: "A",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701021,
        rollNo: "2024021",
        name: "Harsh Agarwal",
        class: "7",
        section: "C",
        marks: {
            mathematics: 42,
            science: 45,
            english: 40,
            social: 47,
            language: 43,
            computer: 48
        },
        totalMarks: 265,
        percentage: "44.17",
        grade: "D",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701022,
        rollNo: "2024022",
        name: "Pooja Banerjee",
        class: "6",
        section: "C",
        marks: {
            mathematics: 76,
            science: 78,
            english: 74,
            social: 77,
            language: 75,
            computer: 80
        },
        totalMarks: 460,
        percentage: "76.67",
        grade: "B",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701023,
        rollNo: "2024023",
        name: "Kabir Sinha",
        class: "10",
        section: "D",
        marks: {
            mathematics: 87,
            science: 85,
            english: 83,
            social: 88,
            language: 86,
            computer: 90
        },
        totalMarks: 519,
        percentage: "86.50",
        grade: "A",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701024,
        rollNo: "2024024",
        name: "Nisha Reddy",
        class: "11",
        section: "D",
        marks: {
            mathematics: 71,
            science: 74,
            english: 69,
            social: 73,
            language: 70,
            computer: 76
        },
        totalMarks: 433,
        percentage: "72.17",
        grade: "B",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701025,
        rollNo: "2024025",
        name: "Yash Pandey",
        class: "12",
        section: "D",
        marks: {
            mathematics: 89,
            science: 91,
            english: 86,
            social: 90,
            language: 87,
            computer: 93
        },
        totalMarks: 536,
        percentage: "89.33",
        grade: "A",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701026,
        rollNo: "2024026",
        name: "Sakshi Dubey",
        class: "9",
        section: "D",
        marks: {
            mathematics: 52,
            science: 55,
            english: 50,
            social: 54,
            language: 51,
            computer: 57
        },
        totalMarks: 319,
        percentage: "53.17",
        grade: "D",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701027,
        rollNo: "2024027",
        name: "Manish Tiwari",
        class: "8",
        section: "D",
        marks: {
            mathematics: 80,
            science: 82,
            english: 78,
            social: 81,
            language: 79,
            computer: 84
        },
        totalMarks: 484,
        percentage: "80.67",
        grade: "B",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701028,
        rollNo: "2024028",
        name: "Divya Menon",
        class: "7",
        section: "D",
        marks: {
            mathematics: 35,
            science: 38,
            english: 33,
            social: 40,
            language: 36,
            computer: 42
        },
        totalMarks: 224,
        percentage: "37.33",
        grade: "F",
        status: "Fail",
        date: "11/21/2025"
    },
    {
        id: 1701029,
        rollNo: "2024029",
        name: "Shubham Mishra",
        class: "6",
        section: "D",
        marks: {
            mathematics: 88,
            science: 86,
            english: 84,
            social: 87,
            language: 85,
            computer: 89
        },
        totalMarks: 519,
        percentage: "86.50",
        grade: "A",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701030,
        rollNo: "2024030",
        name: "Avni Choudhury",
        class: "10",
        section: "A",
        marks: {
            mathematics: 75,
            science: 77,
            english: 73,
            social: 76,
            language: 74,
            computer: 79
        },
        totalMarks: 454,
        percentage: "75.67",
        grade: "B",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701031,
        rollNo: "2024031",
        name: "Ritik Chauhan",
        class: "11",
        section: "A",
        marks: {
            mathematics: 63,
            science: 66,
            english: 61,
            social: 65,
            language: 62,
            computer: 68
        },
        totalMarks: 385,
        percentage: "64.17",
        grade: "C",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701032,
        rollNo: "2024032",
        name: "Kriti Bhatt",
        class: "12",
        section: "A",
        marks: {
            mathematics: 97,
            science: 95,
            english: 93,
            social: 96,
            language: 94,
            computer: 99
        },
        totalMarks: 574,
        percentage: "95.67",
        grade: "A",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701033,
        rollNo: "2024033",
        name: "Mohit Jain",
        class: "9",
        section: "A",
        marks: {
            mathematics: 48,
            science: 51,
            english: 46,
            social: 50,
            language: 47,
            computer: 53
        },
        totalMarks: 295,
        percentage: "49.17",
        grade: "D",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701034,
        rollNo: "2024034",
        name: "Simran Kohli",
        class: "8",
        section: "A",
        marks: {
            mathematics: 86,
            science: 88,
            english: 84,
            social: 87,
            language: 85,
            computer: 90
        },
        totalMarks: 520,
        percentage: "86.67",
        grade: "A",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701035,
        rollNo: "2024035",
        name: "Deepak Yadav",
        class: "7",
        section: "A",
        marks: {
            mathematics: 28,
            science: 32,
            english: 26,
            social: 34,
            language: 30,
            computer: 36
        },
        totalMarks: 186,
        percentage: "31.00",
        grade: "F",
        status: "Fail",
        date: "11/24/2025"
    },
    {
        id: 1701036,
        rollNo: "2024036",
        name: "Ananya Das",
        class: "6",
        section: "A",
        marks: {
            mathematics: 92,
            science: 90,
            english: 88,
            social: 91,
            language: 89,
            computer: 93
        },
        totalMarks: 543,
        percentage: "90.50",
        grade: "A",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701037,
        rollNo: "2024037",
        name: "Sandeep Rajput",
        class: "10",
        section: "B",
        marks: {
            mathematics: 70,
            science: 73,
            english: 68,
            social: 72,
            language: 69,
            computer: 75
        },
        totalMarks: 427,
        percentage: "71.17",
        grade: "B",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701038,
        rollNo: "2024038",
        name: "Shreya Bhatia",
        class: "11",
        section: "B",
        marks: {
            mathematics: 81,
            science: 83,
            english: 79,
            social: 82,
            language: 80,
            computer: 85
        },
        totalMarks: 490,
        percentage: "81.67",
        grade: "A",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701039,
        rollNo: "2024039",
        name: "Nikhil Ghosh",
        class: "12",
        section: "B",
        marks: {
            mathematics: 66,
            science: 69,
            english: 64,
            social: 68,
            language: 65,
            computer: 71
        },
        totalMarks: 403,
        percentage: "67.17",
        grade: "C",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701040,
        rollNo: "2024040",
        name: "Pallavi Soni",
        class: "9",
        section: "B",
        marks: {
            mathematics: 93,
            science: 91,
            english: 89,
            social: 92,
            language: 90,
            computer: 95
        },
        totalMarks: 550,
        percentage: "91.67",
        grade: "A",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701041,
        rollNo: "2024041",
        name: "Rajesh Kumar",
        class: "8",
        section: "B",
        marks: {
            mathematics: 54,
            science: 57,
            english: 52,
            social: 56,
            language: 53,
            computer: 59
        },
        totalMarks: 331,
        percentage: "55.17",
        grade: "D",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701042,
        rollNo: "2024042",
        name: "Swati Thakur",
        class: "7",
        section: "B",
        marks: {
            mathematics: 79,
            science: 81,
            english: 77,
            social: 80,
            language: 78,
            computer: 83
        },
        totalMarks: 478,
        percentage: "79.67",
        grade: "B",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701043,
        rollNo: "2024043",
        name: "Gaurav Saini",
        class: "6",
        section: "B",
        marks: {
            mathematics: 38,
            science: 41,
            english: 36,
            social: 43,
            language: 39,
            computer: 45
        },
        totalMarks: 242,
        percentage: "40.33",
        grade: "D",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701044,
        rollNo: "2024044",
        name: "Preeti Mallik",
        class: "10",
        section: "C",
        marks: {
            mathematics: 85,
            science: 87,
            english: 83,
            social: 86,
            language: 84,
            computer: 89
        },
        totalMarks: 514,
        percentage: "85.67",
        grade: "A",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701045,
        rollNo: "2024045",
        name: "Vishal Pandey",
        class: "11",
        section: "C",
        marks: {
            mathematics: 59,
            science: 62,
            english: 57,
            social: 61,
            language: 58,
            computer: 64
        },
        totalMarks: 361,
        percentage: "60.17",
        grade: "C",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701046,
        rollNo: "2024046",
        name: "Megha Kulkarni",
        class: "12",
        section: "C",
        marks: {
            mathematics: 90,
            science: 92,
            english: 88,
            social: 91,
            language: 89,
            computer: 94
        },
        totalMarks: 544,
        percentage: "90.67",
        grade: "A",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701047,
        rollNo: "2024047",
        name: "Akash Srivastava",
        class: "9",
        section: "C",
        marks: {
            mathematics: 44,
            science: 47,
            english: 42,
            social: 46,
            language: 43,
            computer: 49
        },
        totalMarks: 271,
        percentage: "45.17",
        grade: "D",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701048,
        rollNo: "2024048",
        name: "Isha Bhardwaj",
        class: "8",
        section: "C",
        marks: {
            mathematics: 77,
            science: 79,
            english: 75,
            social: 78,
            language: 76,
            computer: 81
        },
        totalMarks: 466,
        percentage: "77.67",
        grade: "B",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701049,
        rollNo: "2024049",
        name: "Sumit Chawla",
        class: "7",
        section: "C",
        marks: {
            mathematics: 25,
            science: 29,
            english: 23,
            social: 31,
            language: 27,
            computer: 33
        },
        totalMarks: 168,
        percentage: "28.00",
        grade: "F",
        status: "Fail",
        date: "11/20/2025"
    },
    {
        id: 1701050,
        rollNo: "2024050",
        name: "Tanya Saxena",
        class: "6",
        section: "C",
        marks: {
            mathematics: 94,
            science: 92,
            english: 90,
            social: 93,
            language: 91,
            computer: 96
        },
        totalMarks: 556,
        percentage: "92.67",
        grade: "A",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701051,
        rollNo: "2024051",
        name: "Pankaj Verma",
        class: "10",
        section: "D",
        marks: {
            mathematics: 67,
            science: 70,
            english: 65,
            social: 69,
            language: 66,
            computer: 72
        },
        totalMarks: 409,
        percentage: "68.17",
        grade: "C",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701052,
        rollNo: "2024052",
        name: "Sonam Bajaj",
        class: "11",
        section: "D",
        marks: {
            mathematics: 83,
            science: 85,
            english: 81,
            social: 84,
            language: 82,
            computer: 87
        },
        totalMarks: 502,
        percentage: "83.67",
        grade: "A",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701053,
        rollNo: "2024053",
        name: "Abhishek Rathore",
        class: "12",
        section: "D",
        marks: {
            mathematics: 76,
            science: 78,
            english: 74,
            social: 77,
            language: 75,
            computer: 80
        },
        totalMarks: 460,
        percentage: "76.67",
        grade: "B",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701054,
        rollNo: "2024054",
        name: "Komal Singh",
        class: "9",
        section: "D",
        marks: {
            mathematics: 95,
            science: 93,
            english: 91,
            social: 94,
            language: 92,
            computer: 97
        },
        totalMarks: 562,
        percentage: "93.67",
        grade: "A",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701055,
        rollNo: "2024055",
        name: "Ajay Tripathi",
        class: "8",
        section: "D",
        marks: {
            mathematics: 50,
            science: 53,
            english: 48,
            social: 52,
            language: 49,
            computer: 55
        },
        totalMarks: 307,
        percentage: "51.17",
        grade: "D",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701056,
        rollNo: "2024056",
        name: "Lipika Mohan",
        class: "7",
        section: "D",
        marks: {
            mathematics: 73,
            science: 75,
            english: 71,
            social: 74,
            language: 72,
            computer: 77
        },
        totalMarks: 442,
        percentage: "73.67",
        grade: "B",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701057,
        rollNo: "2024057",
        name: "Naveen Ahuja",
        class: "6",
        section: "D",
        marks: {
            mathematics: 33,
            science: 36,
            english: 31,
            social: 38,
            language: 34,
            computer: 40
        },
        totalMarks: 212,
        percentage: "35.33",
        grade: "F",
        status: "Fail",
        date: "11/24/2025"
    },
    {
        id: 1701058,
        rollNo: "2024058",
        name: "Jyoti Sharma",
        class: "5",
        section: "A",
        marks: {
            mathematics: 87,
            science: 89,
            english: 85,
            social: 88,
            language: 86,
            computer: 91
        },
        totalMarks: 526,
        percentage: "87.67",
        grade: "A",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701059,
        rollNo: "2024059",
        name: "Vivek Gupta",
        class: "5",
        section: "B",
        marks: {
            mathematics: 61,
            science: 64,
            english: 59,
            social: 63,
            language: 60,
            computer: 66
        },
        totalMarks: 373,
        percentage: "62.17",
        grade: "C",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701060,
        rollNo: "2024060",
        name: "Priyanka Sethi",
        class: "4",
        section: "A",
        marks: {
            mathematics: 89,
            science: 87,
            english: 85,
            social: 88,
            language: 86,
            computer: 90
        },
        totalMarks: 525,
        percentage: "87.50",
        grade: "A",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701061,
        rollNo: "2024061",
        name: "Ravi Shankar",
        class: "4",
        section: "B",
        marks: {
            mathematics: 46,
            science: 49,
            english: 44,
            social: 48,
            language: 45,
            computer: 51
        },
        totalMarks: 283,
        percentage: "47.17",
        grade: "D",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701062,
        rollNo: "2024062",
        name: "Seema Patel",
        class: "3",
        section: "A",
        marks: {
            mathematics: 91,
            science: 89,
            english: 87,
            social: 90,
            language: 88,
            computer: 92
        },
        totalMarks: 537,
        percentage: "89.50",
        grade: "A",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701063,
        rollNo: "2024063",
        name: "Alok Mishra",
        class: "3",
        section: "B",
        marks: {
            mathematics: 57,
            science: 60,
            english: 55,
            social: 59,
            language: 56,
            computer: 62
        },
        totalMarks: 349,
        percentage: "58.17",
        grade: "D",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701064,
        rollNo: "2024064",
        name: "Geeta Rani",
        class: "2",
        section: "A",
        marks: {
            mathematics: 84,
            science: 86,
            english: 82,
            social: 85,
            language: 83,
            computer: 88
        },
        totalMarks: 508,
        percentage: "84.67",
        grade: "A",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701065,
        rollNo: "2024065",
        name: "Bharat Kumar",
        class: "1",
        section: "A",
        marks: {
            mathematics: 78,
            science: 80,
            english: 76,
            social: 79,
            language: 77,
            computer: 82
        },
        totalMarks: 472,
        percentage: "78.67",
        grade: "B",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701066,
        rollNo: "2024066",
        name: "Sunita Devi",
        class: "10",
        section: "A",
        marks: {
            mathematics: 82,
            science: 84,
            english: 80,
            social: 83,
            language: 81,
            computer: 86
        },
        totalMarks: 496,
        percentage: "82.67",
        grade: "A",
        status: "Pass",
        date: "11/10/2025"
    },
    {
        id: 1701067,
        rollNo: "2024067",
        name: "Manoj Tripathi",
        class: "11",
        section: "A",
        marks: {
            mathematics: 69,
            science: 72,
            english: 67,
            social: 71,
            language: 68,
            computer: 74
        },
        totalMarks: 421,
        percentage: "70.17",
        grade: "B",
        status: "Pass",
        date: "11/10/2025"
    },
    {
        id: 1701068,
        rollNo: "2024068",
        name: "Radhika Joshi",
        class: "12",
        section: "A",
        marks: {
            mathematics: 93,
            science: 95,
            english: 91,
            social: 94,
            language: 92,
            computer: 96
        },
        totalMarks: 561,
        percentage: "93.50",
        grade: "A",
        status: "Pass",
        date: "11/11/2025"
    },
    {
        id: 1701069,
        rollNo: "2024069",
        name: "Suresh Babu",
        class: "9",
        section: "A",
        marks: {
            mathematics: 56,
            science: 59,
            english: 54,
            social: 58,
            language: 55,
            computer: 61
        },
        totalMarks: 343,
        percentage: "57.17",
        grade: "D",
        status: "Pass",
        date: "11/11/2025"
    },
    {
        id: 1701070,
        rollNo: "2024070",
        name: "Nidhi Agarwal",
        class: "8",
        section: "A",
        marks: {
            mathematics: 88,
            science: 90,
            english: 86,
            social: 89,
            language: 87,
            computer: 92
        },
        totalMarks: 532,
        percentage: "88.67",
        grade: "A",
        status: "Pass",
        date: "11/12/2025"
    },
    {
        id: 1701071,
        rollNo: "2024071",
        name: "Ramesh Chand",
        class: "7",
        section: "A",
        marks: {
            mathematics: 41,
            science: 44,
            english: 39,
            social: 46,
            language: 42,
            computer: 48
        },
        totalMarks: 260,
        percentage: "43.33",
        grade: "D",
        status: "Pass",
        date: "11/12/2025"
    },
    {
        id: 1701072,
        rollNo: "2024072",
        name: "Kavita Singh",
        class: "6",
        section: "A",
        marks: {
            mathematics: 75,
            science: 77,
            english: 73,
            social: 76,
            language: 74,
            computer: 79
        },
        totalMarks: 454,
        percentage: "75.67",
        grade: "B",
        status: "Pass",
        date: "11/13/2025"
    },
    {
        id: 1701073,
        rollNo: "2024073",
        name: "Vikash Kumar",
        class: "10",
        section: "B",
        marks: {
            mathematics: 86,
            science: 88,
            english: 84,
            social: 87,
            language: 85,
            computer: 90
        },
        totalMarks: 520,
        percentage: "86.67",
        grade: "A",
        status: "Pass",
        date: "11/13/2025"
    },
    {
        id: 1701074,
        rollNo: "2024074",
        name: "Lata Mangeshkar",
        class: "11",
        section: "B",
        marks: {
            mathematics: 74,
            science: 76,
            english: 72,
            social: 75,
            language: 73,
            computer: 78
        },
        totalMarks: 448,
        percentage: "74.67",
        grade: "B",
        status: "Pass",
        date: "11/14/2025"
    },
    {
        id: 1701075,
        rollNo: "2024075",
        name: "Sanjay Dutt",
        class: "12",
        section: "B",
        marks: {
            mathematics: 91,
            science: 89,
            english: 87,
            social: 90,
            language: 88,
            computer: 93
        },
        totalMarks: 538,
        percentage: "89.67",
        grade: "A",
        status: "Pass",
        date: "11/14/2025"
    },
    {
        id: 1701076,
        rollNo: "2024076",
        name: "Reena Kapoor",
        class: "9",
        section: "B",
        marks: {
            mathematics: 51,
            science: 54,
            english: 49,
            social: 53,
            language: 50,
            computer: 56
        },
        totalMarks: 313,
        percentage: "52.17",
        grade: "D",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701077,
        rollNo: "2024077",
        name: "Ashok Pathak",
        class: "8",
        section: "B",
        marks: {
            mathematics: 79,
            science: 81,
            english: 77,
            social: 80,
            language: 78,
            computer: 83
        },
        totalMarks: 478,
        percentage: "79.67",
        grade: "B",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701078,
        rollNo: "2024078",
        name: "Madhuri Dixit",
        class: "7",
        section: "B",
        marks: {
            mathematics: 30,
            science: 34,
            english: 28,
            social: 36,
            language: 32,
            computer: 38
        },
        totalMarks: 198,
        percentage: "33.00",
        grade: "F",
        status: "Fail",
        date: "11/16/2025"
    },
    {
        id: 1701079,
        rollNo: "2024079",
        name: "Dharmendra Singh",
        class: "6",
        section: "B",
        marks: {
            mathematics: 89,
            science: 87,
            english: 85,
            social: 88,
            language: 86,
            computer: 90
        },
        totalMarks: 525,
        percentage: "87.50",
        grade: "A",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701080,
        rollNo: "2024080",
        name: "Urmila Matondkar",
        class: "10",
        section: "C",
        marks: {
            mathematics: 72,
            science: 74,
            english: 70,
            social: 73,
            language: 71,
            computer: 76
        },
        totalMarks: 436,
        percentage: "72.67",
        grade: "B",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701081,
        rollNo: "2024081",
        name: "Govinda Kumar",
        class: "11",
        section: "C",
        marks: {
            mathematics: 64,
            science: 67,
            english: 62,
            social: 66,
            language: 63,
            computer: 69
        },
        totalMarks: 391,
        percentage: "65.17",
        grade: "C",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701082,
        rollNo: "2024082",
        name: "Juhi Chawla",
        class: "12",
        section: "C",
        marks: {
            mathematics: 98,
            science: 96,
            english: 94,
            social: 97,
            language: 95,
            computer: 99
        },
        totalMarks: 579,
        percentage: "96.50",
        grade: "A",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701083,
        rollNo: "2024083",
        name: "Sunny Deol",
        class: "9",
        section: "C",
        marks: {
            mathematics: 47,
            science: 50,
            english: 45,
            social: 49,
            language: 46,
            computer: 52
        },
        totalMarks: 289,
        percentage: "48.17",
        grade: "D",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701084,
        rollNo: "2024084",
        name: "Karisma Kapoor",
        class: "8",
        section: "C",
        marks: {
            mathematics: 85,
            science: 87,
            english: 83,
            social: 86,
            language: 84,
            computer: 89
        },
        totalMarks: 514,
        percentage: "85.67",
        grade: "A",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701085,
        rollNo: "2024085",
        name: "Bobby Deol",
        class: "7",
        section: "C",
        marks: {
            mathematics: 27,
            science: 31,
            english: 25,
            social: 33,
            language: 29,
            computer: 35
        },
        totalMarks: 180,
        percentage: "30.00",
        grade: "F",
        status: "Fail",
        date: "11/19/2025"
    },
    {
        id: 1701086,
        rollNo: "2024086",
        name: "Rani Mukherjee",
        class: "6",
        section: "C",
        marks: {
            mathematics: 91,
            science: 89,
            english: 87,
            social: 90,
            language: 88,
            computer: 92
        },
        totalMarks: 537,
        percentage: "89.50",
        grade: "A",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701087,
        rollNo: "2024087",
        name: "Ajay Devgan",
        class: "10",
        section: "D",
        marks: {
            mathematics: 68,
            science: 71,
            english: 66,
            social: 70,
            language: 67,
            computer: 73
        },
        totalMarks: 415,
        percentage: "69.17",
        grade: "C",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701088,
        rollNo: "2024088",
        name: "Kajol Devgan",
        class: "11",
        section: "D",
        marks: {
            mathematics: 80,
            science: 82,
            english: 78,
            social: 81,
            language: 79,
            computer: 84
        },
        totalMarks: 484,
        percentage: "80.67",
        grade: "B",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701089,
        rollNo: "2024089",
        name: "Shahid Kapoor",
        class: "12",
        section: "D",
        marks: {
            mathematics: 65,
            science: 68,
            english: 63,
            social: 67,
            language: 64,
            computer: 70
        },
        totalMarks: 397,
        percentage: "66.17",
        grade: "C",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701090,
        rollNo: "2024090",
        name: "Kareena Kapoor",
        class: "9",
        section: "D",
        marks: {
            mathematics: 94,
            science: 92,
            english: 90,
            social: 93,
            language: 91,
            computer: 96
        },
        totalMarks: 556,
        percentage: "92.67",
        grade: "A",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701091,
        rollNo: "2024091",
        name: "Saif Ali Khan",
        class: "8",
        section: "D",
        marks: {
            mathematics: 53,
            science: 56,
            english: 51,
            social: 55,
            language: 52,
            computer: 58
        },
        totalMarks: 325,
        percentage: "54.17",
        grade: "D",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701092,
        rollNo: "2024092",
        name: "Preity Zinta",
        class: "7",
        section: "D",
        marks: {
            mathematics: 76,
            science: 78,
            english: 74,
            social: 77,
            language: 75,
            computer: 80
        },
        totalMarks: 460,
        percentage: "76.67",
        grade: "B",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701093,
        rollNo: "2024093",
        name: "Hrithik Roshan",
        class: "6",
        section: "D",
        marks: {
            mathematics: 37,
            science: 40,
            english: 35,
            social: 42,
            language: 38,
            computer: 44
        },
        totalMarks: 236,
        percentage: "39.33",
        grade: "F",
        status: "Fail",
        date: "11/23/2025"
    },
    {
        id: 1701094,
        rollNo: "2024094",
        name: "Aishwarya Rai",
        class: "5",
        section: "A",
        marks: {
            mathematics: 90,
            science: 88,
            english: 86,
            social: 89,
            language: 87,
            computer: 91
        },
        totalMarks: 531,
        percentage: "88.50",
        grade: "A",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701095,
        rollNo: "2024095",
        name: "Abhishek Bachchan",
        class: "5",
        section: "B",
        marks: {
            mathematics: 60,
            science: 63,
            english: 58,
            social: 62,
            language: 59,
            computer: 65
        },
        totalMarks: 367,
        percentage: "61.17",
        grade: "C",
        status: "Pass",
        date: "11/24/2025"
    },
    {
        id: 1701096,
        rollNo: "2024096",
        name: "Amitabh Bachchan",
        class: "4",
        section: "A",
        marks: {
            mathematics: 87,
            science: 85,
            english: 83,
            social: 86,
            language: 84,
            computer: 88
        },
        totalMarks: 513,
        percentage: "85.50",
        grade: "A",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701097,
        rollNo: "2024097",
        name: "Jaya Bachchan",
        class: "4",
        section: "B",
        marks: {
            mathematics: 43,
            science: 46,
            english: 41,
            social: 45,
            language: 42,
            computer: 48
        },
        totalMarks: 265,
        percentage: "44.17",
        grade: "D",
        status: "Pass",
        date: "11/25/2025"
    },
    {
        id: 1701098,
        rollNo: "2024098",
        name: "Rekha Sharma",
        class: "3",
        section: "A",
        marks: {
            mathematics: 92,
            science: 90,
            english: 88,
            social: 91,
            language: 89,
            computer: 93
        },
        totalMarks: 543,
        percentage: "90.50",
        grade: "A",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701099,
        rollNo: "2024099",
        name: "Hema Malini",
        class: "3",
        section: "B",
        marks: {
            mathematics: 55,
            science: 58,
            english: 53,
            social: 57,
            language: 54,
            computer: 60
        },
        totalMarks: 337,
        percentage: "56.17",
        grade: "D",
        status: "Pass",
        date: "11/26/2025"
    },
    {
        id: 1701100,
        rollNo: "2024100",
        name: "Zeenat Aman",
        class: "2",
        section: "A",
        marks: {
            mathematics: 83,
            science: 85,
            english: 81,
            social: 84,
            language: 82,
            computer: 87
        },
        totalMarks: 502,
        percentage: "83.67",
        grade: "A",
        status: "Pass",
        date: "11/10/2025"
    },
    {
        id: 1701101,
        rollNo: "2024101",
        name: "Parveen Babi",
        class: "1",
        section: "A",
        marks: {
            mathematics: 77,
            science: 79,
            english: 75,
            social: 78,
            language: 76,
            computer: 81
        },
        totalMarks: 466,
        percentage: "77.67",
        grade: "B",
        status: "Pass",
        date: "11/11/2025"
    },
    {
        id: 1701102,
        rollNo: "2024102",
        name: "Rajesh Khanna",
        class: "10",
        section: "A",
        marks: {
            mathematics: 81,
            science: 83,
            english: 79,
            social: 82,
            language: 80,
            computer: 85
        },
        totalMarks: 490,
        percentage: "81.67",
        grade: "A",
        status: "Pass",
        date: "11/12/2025"
    },
    {
        id: 1701103,
        rollNo: "2024103",
        name: "Dimple Kapadia",
        class: "11",
        section: "A",
        marks: {
            mathematics: 66,
            science: 69,
            english: 64,
            social: 68,
            language: 65,
            computer: 71
        },
        totalMarks: 403,
        percentage: "67.17",
        grade: "C",
        status: "Pass",
        date: "11/13/2025"
    },
    {
        id: 1701104,
        rollNo: "2024104",
        name: "Vinod Khanna",
        class: "12",
        section: "A",
        marks: {
            mathematics: 95,
            science: 93,
            english: 91,
            social: 94,
            language: 92,
            computer: 97
        },
        totalMarks: 562,
        percentage: "93.67",
        grade: "A",
        status: "Pass",
        date: "11/14/2025"
    },
    {
        id: 1701105,
        rollNo: "2024105",
        name: "Sharmila Tagore",
        class: "9",
        section: "A",
        marks: {
            mathematics: 49,
            science: 52,
            english: 47,
            social: 51,
            language: 48,
            computer: 54
        },
        totalMarks: 301,
        percentage: "50.17",
        grade: "D",
        status: "Pass",
        date: "11/15/2025"
    },
    {
        id: 1701106,
        rollNo: "2024106",
        name: "Rishi Kapoor",
        class: "8",
        section: "A",
        marks: {
            mathematics: 84,
            science: 86,
            english: 82,
            social: 85,
            language: 83,
            computer: 88
        },
        totalMarks: 508,
        percentage: "84.67",
        grade: "A",
        status: "Pass",
        date: "11/16/2025"
    },
    {
        id: 1701107,
        rollNo: "2024107",
        name: "Neetu Singh",
        class: "7",
        section: "A",
        marks: {
            mathematics: 39,
            science: 42,
            english: 37,
            social: 44,
            language: 40,
            computer: 46
        },
        totalMarks: 248,
        percentage: "41.33",
        grade: "D",
        status: "Pass",
        date: "11/17/2025"
    },
    {
        id: 1701108,
        rollNo: "2024108",
        name: "Randhir Kapoor",
        class: "6",
        section: "A",
        marks: {
            mathematics: 74,
            science: 76,
            english: 72,
            social: 75,
            language: 73,
            computer: 78
        },
        totalMarks: 448,
        percentage: "74.67",
        grade: "B",
        status: "Pass",
        date: "11/18/2025"
    },
    {
        id: 1701109,
        rollNo: "2024109",
        name: "Babita Kapoor",
        class: "10",
        section: "B",
        marks: {
            mathematics: 89,
            science: 87,
            english: 85,
            social: 88,
            language: 86,
            computer: 91
        },
        totalMarks: 526,
        percentage: "87.67",
        grade: "A",
        status: "Pass",
        date: "11/19/2025"
    },
    {
        id: 1701110,
        rollNo: "2024110",
        name: "Ranveer Singh",
        class: "11",
        section: "B",
        marks: {
            mathematics: 71,
            science: 73,
            english: 69,
            social: 72,
            language: 70,
            computer: 75
        },
        totalMarks: 430,
        percentage: "71.67",
        grade: "B",
        status: "Pass",
        date: "11/20/2025"
    },
    {
        id: 1701111,
        rollNo: "2024111",
        name: "Deepika Padukone",
        class: "12",
        section: "B",
        marks: {
            mathematics: 96,
            science: 94,
            english: 92,
            social: 95,
            language: 93,
            computer: 98
        },
        totalMarks: 568,
        percentage: "94.67",
        grade: "A",
        status: "Pass",
        date: "11/21/2025"
    },
    {
        id: 1701112,
        rollNo: "2024112",
        name: "Ranbir Kapoor",
        class: "9",
        section: "B",
        marks: {
            mathematics: 62,
            science: 65,
            english: 60,
            social: 64,
            language: 61,
            computer: 67
        },
        totalMarks: 379,
        percentage: "63.17",
        grade: "C",
        status: "Pass",
        date: "11/22/2025"
    },
    {
        id: 1701113,
        rollNo: "2024113",
        name: "Alia Bhatt",
        class: "8",
        section: "B",
        marks: {
            mathematics: 86,
            science: 88,
            english: 84,
            social: 87,
            language: 85,
            computer: 90
        },
        totalMarks: 520,
        percentage: "86.67",
        grade: "A",
        status: "Pass",
        date: "11/23/2025"
    },
    {
        id: 1701114,
        rollNo: "2024114",
        name: "Varun Dhawan",
        class: "7",
        section: "B",
        marks: {
            mathematics: 34,
            science: 37,
            english: 32,
            social: 39,
            language: 35,
            computer: 41
        },
        totalMarks: 218,
        percentage: "36.33",
        grade: "F",
        status: "Fail",
        date: "11/24/2025"
    },
    {
        id: 1701115,
        rollNo: "2024115",
        name: "Shraddha Kapoor",
        class: "6",
        section: "B",
        marks: {
            mathematics: 93,
            science: 91,
            english: 89,
            social: 92,
            language: 90,
            computer: 94
        },
        totalMarks: 549,
        percentage: "91.50",
        grade: "A",
        status: "Pass",
        date: "11/25/2025"
    }
];

// Data storage - Always load full dummy data (comment out to use localStorage)
let students = [...dummyStudents];
localStorage.setItem('students', JSON.stringify(students));

// Uncomment below to use localStorage persistence instead
// let students = JSON.parse(localStorage.getItem('students')) || [];
// if (students.length === 0) {
//     students = [...dummyStudents];
//     localStorage.setItem('students', JSON.stringify(students));
// }

// Pagination variables
let currentPage = 1;
const studentsPerPage = 30;

// DOM Elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const studentForm = document.getElementById('student-form');
const searchInput = document.getElementById('search-input');
const filterClass = document.getElementById('filter-class');
const filterStatus = document.getElementById('filter-status');
const detailModal = document.getElementById('detail-modal');

// ==================== Navigation ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
        
        // Update view if viewing results
        if (sectionId === 'view-results') {
            displayResults();
        } else if (sectionId === 'dashboard') {
            updateDashboard();
        }
    });
});

// ==================== Form Submission ====================
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(studentForm);
    
    // Get marks
    const marks = {
        mathematics: parseInt(formData.get('mathematics')),
        science: parseInt(formData.get('science')),
        english: parseInt(formData.get('english')),
        social: parseInt(formData.get('social')),
        language: parseInt(formData.get('language')),
        computer: parseInt(formData.get('computer'))
    };
    
    // Calculate results
    const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
    const maxMarks = 600;
    const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
    const grade = calculateGrade(percentage);
    const status = percentage >= 40 ? 'Pass' : 'Fail';
    
    // Create student object
    const student = {
        id: Date.now(),
        rollNo: formData.get('rollNo'),
        name: formData.get('studentName'),
        class: formData.get('class'),
        section: formData.get('section'),
        marks: marks,
        totalMarks: totalMarks,
        percentage: percentage,
        grade: grade,
        status: status,
        date: new Date().toLocaleDateString()
    };
    
    // Check if roll number already exists
    const existingStudent = students.find(s => s.rollNo === student.rollNo);
    if (existingStudent) {
        if (confirm('A student with this roll number already exists. Do you want to update the record?')) {
            // Update existing student
            const index = students.findIndex(s => s.rollNo === student.rollNo);
            students[index] = student;
            showNotification('Student record updated successfully!', 'success');
        } else {
            return;
        }
    } else {
        // Add new student
        students.push(student);
        showNotification('Student added successfully!', 'success');
    }
    
    // Save to localStorage
    saveToStorage();
    
    // Reset form
    studentForm.reset();
    
    // Update dashboard
    updateDashboard();
});

// ==================== Calculate Grade ====================
function calculateGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 75) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 40) return 'D';
    return 'F';
}

// ==================== Save to LocalStorage ====================
function saveToStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

// ==================== Update Dashboard ====================
function updateDashboard() {
    // Total students
    document.getElementById('total-students').textContent = students.length;
    
    // Passed students
    const passedStudents = students.filter(s => s.status === 'Pass').length;
    document.getElementById('passed-students').textContent = passedStudents;
    
    // Average percentage
    if (students.length > 0) {
        const avgPercentage = (students.reduce((sum, s) => sum + parseFloat(s.percentage), 0) / students.length).toFixed(2);
        document.getElementById('avg-percentage').textContent = avgPercentage + '%';
    } else {
        document.getElementById('avg-percentage').textContent = '0%';
    }
    
    // Top scorer
    if (students.length > 0) {
        const topScorer = students.reduce((max, s) => 
            parseFloat(s.percentage) > parseFloat(max.percentage) ? s : max
        );
        document.getElementById('top-scorer').textContent = topScorer.name;
    } else {
        document.getElementById('top-scorer').textContent = 'N/A';
    }
    
    // Recent students (last 5)
    displayRecentStudents();
}

// ==================== Display Recent Students ====================
function displayRecentStudents() {
    const recentStudentsBody = document.getElementById('recent-students-body');
    
    if (students.length === 0) {
        recentStudentsBody.innerHTML = '<tr><td colspan="6" class="no-data">No students added yet</td></tr>';
        return;
    }
    
    const recentStudents = students.slice(-10).reverse();
    
    recentStudentsBody.innerHTML = recentStudents.map(student => `
        <tr>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>Class ${student.class} - ${student.section}</td>
            <td>${student.percentage}%</td>
            <td><span class="grade-badge grade-${student.grade}">${student.grade}</span></td>
            <td><span class="status-badge ${student.status.toLowerCase()}">${student.status}</span></td>
        </tr>
    `).join('');
}

// ==================== Display Results ====================
function displayResults(filteredStudents = null) {
    const resultsTableBody = document.getElementById('results-table-body');
    const studentsToDisplay = filteredStudents || students;
    
    if (studentsToDisplay.length === 0) {
        resultsTableBody.innerHTML = '<tr><td colspan="9" class="no-data">No results found</td></tr>';
        updatePagination(0);
        return;
    }
    
    // Sort by roll number
    const sortedStudents = [...studentsToDisplay].sort((a, b) => {
        return a.rollNo.localeCompare(b.rollNo);
    });
    
    // Calculate pagination
    const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);
    const startIndex = (currentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    const paginatedStudents = sortedStudents.slice(startIndex, endIndex);
    
    resultsTableBody.innerHTML = paginatedStudents.map(student => `
        <tr>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.section}</td>
            <td>${student.totalMarks}/600</td>
            <td>${student.percentage}%</td>
            <td><span class="grade-badge grade-${student.grade}">${student.grade}</span></td>
            <td><span class="status-badge ${student.status.toLowerCase()}">${student.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-info btn-sm" onclick="viewDetails(${student.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    updatePagination(totalPages, sortedStudents.length);
}

// ==================== Update Pagination ====================
function updatePagination(totalPages, totalRecords = 0) {
    const paginationContainer = document.getElementById('pagination-container');
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination-info">Showing ' + 
        ((currentPage - 1) * studentsPerPage + 1) + ' - ' + 
        Math.min(currentPage * studentsPerPage, totalRecords) + ' of ' + 
        totalRecords + ' results</div><div class="pagination-controls">';
    
    // Previous button
    paginationHTML += `<button class="btn-page ${currentPage === 1 ? 'disabled' : ''}" 
        onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i> Previous
    </button>`;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button class="btn-page" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button class="btn-page ${i === currentPage ? 'active' : ''}" 
            onclick="changePage(${i})">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="btn-page" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `<button class="btn-page ${currentPage === totalPages ? 'disabled' : ''}" 
        onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
    </button>`;
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

// ==================== Change Page ====================
function changePage(page) {
    const searchTerm = searchInput.value.toLowerCase();
    const classFilter = filterClass.value;
    const statusFilter = filterStatus.value;
    
    let filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) ||
                            student.rollNo.toLowerCase().includes(searchTerm) ||
                            student.class.includes(searchTerm);
        
        const matchesClass = !classFilter || student.class === classFilter;
        const matchesStatus = !statusFilter || student.status === statusFilter;
        
        return matchesSearch && matchesClass && matchesStatus;
    });
    
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayResults(filteredStudents.length > 0 ? filteredStudents : null);
    
    // Scroll to top of results
    document.getElementById('view-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==================== Search Functionality ====================
searchInput.addEventListener('input', () => {
    currentPage = 1; // Reset to first page on search
    applyFilters();
});
filterClass.addEventListener('change', () => {
    currentPage = 1; // Reset to first page on filter
    applyFilters();
});
filterStatus.addEventListener('change', () => {
    currentPage = 1; // Reset to first page on filter
    applyFilters();
});

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const classFilter = filterClass.value;
    const statusFilter = filterStatus.value;
    
    let filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) ||
                            student.rollNo.toLowerCase().includes(searchTerm) ||
                            student.class.includes(searchTerm);
        
        const matchesClass = !classFilter || student.class === classFilter;
        const matchesStatus = !statusFilter || student.status === statusFilter;
        
        return matchesSearch && matchesClass && matchesStatus;
    });
    
    displayResults(filteredStudents);
}

// ==================== View Student Details ====================
function viewDetails(id) {
    const student = students.find(s => s.id === id);
    
    if (!student) return;
    
    const modalBody = document.getElementById('modal-body-content');
    
    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item">
                <span class="detail-label">Roll Number:</span>
                <span class="detail-value">${student.rollNo}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Student Name:</span>
                <span class="detail-value">${student.name}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Class:</span>
                <span class="detail-value">Class ${student.class} - Section ${student.section}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Date:</span>
                <span class="detail-value">${student.date}</span>
            </div>
        </div>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Subject-wise Marks</h3>
        <div class="marks-grid">
            <div class="mark-item">
                <div class="mark-subject">Mathematics</div>
                <div class="mark-value">${student.marks.mathematics}/100</div>
            </div>
            <div class="mark-item">
                <div class="mark-subject">Science</div>
                <div class="mark-value">${student.marks.science}/100</div>
            </div>
            <div class="mark-item">
                <div class="mark-subject">English</div>
                <div class="mark-value">${student.marks.english}/100</div>
            </div>
            <div class="mark-item">
                <div class="mark-subject">Social Studies</div>
                <div class="mark-value">${student.marks.social}/100</div>
            </div>
            <div class="mark-item">
                <div class="mark-subject">Hindi/Regional</div>
                <div class="mark-value">${student.marks.language}/100</div>
            </div>
            <div class="mark-item">
                <div class="mark-subject">Computer</div>
                <div class="mark-value">${student.marks.computer}/100</div>
            </div>
        </div>
        
        <div class="detail-grid" style="margin-top: 2rem;">
            <div class="detail-item">
                <span class="detail-label">Total Marks:</span>
                <span class="detail-value">${student.totalMarks}/600</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Percentage:</span>
                <span class="detail-value">${student.percentage}%</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Grade:</span>
                <span class="detail-value"><span class="grade-badge grade-${student.grade}">${student.grade}</span></span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Status:</span>
                <span class="detail-value"><span class="status-badge ${student.status.toLowerCase()}">${student.status}</span></span>
            </div>
        </div>
    `;
    
    detailModal.classList.add('active');
}

// ==================== Close Modal ====================
function closeModal() {
    detailModal.classList.remove('active');
}

// Close modal on outside click
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        closeModal();
    }
});

// ==================== Delete Student ====================
function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student record?')) {
        students = students.filter(s => s.id !== id);
        saveToStorage();
        displayResults();
        updateDashboard();
        showNotification('Student deleted successfully!', 'danger');
    }
}

// ==================== Show Notification ====================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#43e97b' : '#f5576c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== Initialize on Page Load ====================
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    displayResults();
});

// ==================== Form Validation ====================
// Add real-time validation for marks inputs
const marksInputs = document.querySelectorAll('input[type="number"]');
marksInputs.forEach(input => {
    input.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value < 0) {
            this.value = 0;
        } else if (value > 100) {
            this.value = 100;
        }
    });
});

// ==================== Export/Print Functionality ====================
function printResult(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;
    
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Result - ${student.name}</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                h1 {
                    text-align: center;
                    color: #667eea;
                    margin-bottom: 30px;
                }
                .info-table {
                    width: 100%;
                    margin-bottom: 30px;
                    border-collapse: collapse;
                }
                .info-table td {
                    padding: 10px;
                    border: 1px solid #ddd;
                }
                .info-table td:first-child {
                    font-weight: bold;
                    width: 200px;
                    background: #f8f9fa;
                }
                .marks-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }
                .marks-table th,
                .marks-table td {
                    padding: 12px;
                    border: 1px solid #ddd;
                    text-align: left;
                }
                .marks-table th {
                    background: #667eea;
                    color: white;
                }
                .footer {
                    margin-top: 50px;
                    text-align: center;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>Student Result Report</h1>
            
            <table class="info-table">
                <tr>
                    <td>Roll Number</td>
                    <td>${student.rollNo}</td>
                </tr>
                <tr>
                    <td>Student Name</td>
                    <td>${student.name}</td>
                </tr>
                <tr>
                    <td>Class</td>
                    <td>Class ${student.class} - Section ${student.section}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>${student.date}</td>
                </tr>
            </table>
            
            <h2>Subject-wise Marks</h2>
            <table class="marks-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Maximum Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mathematics</td>
                        <td>${student.marks.mathematics}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>${student.marks.science}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>${student.marks.english}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Social Studies</td>
                        <td>${student.marks.social}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Hindi/Regional Language</td>
                        <td>${student.marks.language}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Computer Science</td>
                        <td>${student.marks.computer}</td>
                        <td>100</td>
                    </tr>
                    <tr style="font-weight: bold; background: #f8f9fa;">
                        <td>Total</td>
                        <td>${student.totalMarks}</td>
                        <td>600</td>
                    </tr>
                </tbody>
            </table>
            
            <table class="info-table">
                <tr>
                    <td>Percentage</td>
                    <td>${student.percentage}%</td>
                </tr>
                <tr>
                    <td>Grade</td>
                    <td>${student.grade}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>${student.status}</td>
                </tr>
            </table>
            
            <div class="footer">
                <p>Generated on ${new Date().toLocaleDateString()}</p>
                <p>School Result Management System</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ==================== Keyboard Shortcuts ====================
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && detailModal.classList.contains('active')) {
        closeModal();
    }
});
