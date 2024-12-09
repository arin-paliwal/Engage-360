### Engage360 - Employee Experience Platform

**Project Description:**  
Engage360 is a front-end platform designed to improve employee engagement and foster a collaborative workplace environment. The application combines communication, recognition, and feedback tools to simulate a modern employee experience portal for organizations.

---

### **Roles and Their Responsibilities**

#### **Admin Role**

Admins oversee platform management, ensuring smooth operation and configuring platform settings. Their dashboard includes tools for employee management, recruitment, payroll, and schedule oversight.

**Key Responsibilities:**

1. **Employee Management:**
   - Add, update, or deactivate employee accounts.
   - Assign roles (employee, manager, admin).
2. **Recruitment:**
   - Post job openings and manage the recruitment process.
   - Screen applicants and manage interview scheduling.
3. **Payroll:**
   - Oversee employee payroll processes.
   - Generate payroll reports and manage compensation details.
4. **Schedule Management:**
   - Set up and monitor work schedules for employees.
   - Approve or adjust shift timings based on team needs.

---

#### **Manager & Employee**

Managers and Employees share similar responsibilities, with managers having additional features for team management. The role adapts to either function based on assigned permissions.

**Key Responsibilities:**

1. **Dashboard Overview:**
   - View role-specific updates and tasks.
   - **Manager-Specific:** View team-specific engagement data (e.g., recognition activity, feedback trends).
2. **Recognition System:**
   - **Employee:** Send badges or shoutouts to colleagues.
   - **Manager:** Send and track team recognition, monitor recognition trends within their team.
3. **Feedback Mechanism:**
   - **Employee:** Submit anonymous feedback and suggest ideas or improvements.
   - **Manager:** Analyze feedback trends from the team, act on sentiment data, and respond to suggestions.
4. **Event Participation:**
   - **Employee:** RSVP to company or team events, access event details, and participate in post-event summaries.
   - **Manager:** Organize team-specific events, coordinate RSVPs, and share event details with the team.
5. **Resource Hub:**
   - **Employee:** Access company policies, training materials, and guides.
   - **Manager:** Share relevant resources with the team, such as guides or training materials.
6. **Attendance:**
   - **Employee:** Track and log attendance records.
   - **Manager:** Monitor team attendance, approve time-off requests.
7. **To-Do List:**
   - **Employee:** Manage daily tasks and track progress.
   - **Manager:** Assign tasks to team members and track their completion.
8. **Project Management:**
   - **Employee:** Access and participate in projects, track deadlines and deliverables.
   - **Manager:** Manage project timelines, assign responsibilities, and monitor progress.
9. **Schedule:**
   - **Employee:** View work schedule and shift timings.
   - **Manager:** Configure work schedules for team members.

---

### **Platform Features by Role**

| Feature              | Admin                                               | Generic Role (Manager & Employee) |
| -------------------- | --------------------------------------------------- | --------------------------------- |
| Dashboards           | Employee Management, Recruitment, Payroll, Schedule | Role-Specific Analytics           |
| Recognition System   | Oversight & Moderation                              | Send & Track Recognition          |
| Feedback Mechanism   | Monitor Org Feedback Trends                         | Submit/Analyze Feedback           |
| Assistant Simulation | Configure FAQ Responses                             | Use Assistant for Queries         |
| Event Management     | Create & Manage Events                              | Organize/Participate in Events    |
| Resource Hub         | Upload & Manage Resources                           | Share/Access Resources            |
| Attendance           |                                                     | Log & Approve Attendance          |
| To-Do List           |                                                     | Manage Tasks & Track Progress     |
| Project Management   |                                                     | Manage & Track Project Progress   |
| Schedule Management  | Set Up & Monitor Schedules                          | View & Manage Work Schedules      |

---

### **Technical Architecture Overview**

**Frontend:**

- React for UI development.
- Redux for state management (modular slices for each role or feature).
- Tailwind CSS for fast and customizable styling.

**Routing:**

- React Router for module navigation (role-specific routes).

**Data Handling:**

- Static JSON files or mock APIs to manage employee, event, and resource data.
