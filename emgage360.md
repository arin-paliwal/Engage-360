### Engage360 - Employee Experience Platform

**Project Description:**  
Engage360 is a front-end platform designed to improve employee engagement and foster a collaborative workplace environment. The application combines communication, recognition, and feedback tools to simulate a modern employee experience portal for organizations.

---

### **Roles and Their Responsibilities**

#### **Admin Role**

Admins oversee platform management, ensuring smooth operation and configuring platform settings. Their dashboard includes tools for analytics, user management, and event creation.

**Key Responsibilities:**

1. **User Management:**
   - Add, update, or deactivate employee accounts.
   - Assign roles (employee, manager, admin).
2. **Analytics Oversight:**
   - Access high-level organizational metrics (e.g., engagement scores, event participation, feedback trends).
   - Generate reports for management review.
3. **Event Management:**
   - Create and manage company-wide events.
   - Monitor RSVP statuses and send reminders.
4. **Resource Hub Management:**
   - Upload and organize company policies, guides, and training materials.
5. **Moderation:**
   - Monitor and approve recognition or feedback content.

---

#### **Manager Role**

Managers focus on their team's engagement and well-being. Their dashboard provides insights into team-specific metrics, feedback analysis, and recognition trends.

**Key Responsibilities:**

1. **Team Insights:**
   - View team-specific engagement data (e.g., recognition activity, feedback trends).
   - Track performance and morale using visual summaries.
2. **Recognition Leadership:**
   - Recognize team members with badges or shoutouts.
   - Monitor recognition trends within their team.
3. **Feedback Management:**
   - Analyze feedback from team members (anonymized if necessary).
   - Respond to suggestions and act on sentiment data.
4. **Event Collaboration:**
   - Organize department-specific events or team meetings.
   - Coordinate RSVPs and share event details.
5. **Resource Allocation:**
   - Share relevant resources with the team, such as guides or training materials.

---

#### **Employee Role**

Employees form the core user base, accessing tools for communication, recognition, and participation. Their dashboard highlights daily tasks, feedback mechanisms, and collaborative tools.

**Key Responsibilities:**

1. **Dashboard Overview:**
   - View role-specific updates and tasks.
2. **Peer Recognition:**
   - Send badges or shoutouts to colleagues.
   - View a recognition feed to see acknowledgments from peers.
3. **Feedback Participation:**
   - Submit anonymous feedback through structured forms.
   - Suggest ideas or improvements for the workplace.
4. **Event Participation:**
   - RSVP to company or team events.
   - Access event details and post-event summaries.
5. **Resource Access:**
   - Browse company policies, training materials, or guides in the Resource Hub.
   - Bookmark frequently used resources for quick access.

---

### **Platform Features by Role**

| Feature              | Admin                       | Manager                       | Employee                  |
| -------------------- | --------------------------- | ----------------------------- | ------------------------- |
| Dashboards           | Org-Level Analytics         | Team-Level Analytics          | Task Overview             |
| Recognition System   | Oversight & Moderation      | Send & Track Team Recognition | Send Peer Recognition     |
| Feedback Mechanism   | Monitor Org Feedback Trends | Monitor Team Feedback Trends  | Submit Feedback           |
| Assistant Simulation | Configure FAQ Responses     | Use Assistant for Queries     | Use Assistant for Queries |
| Event Management     | Create & Manage Events      | Organize Team Events          | RSVP to Events            |
| Resource Hub         | Upload & Manage Resources   | Share Resources with Team     | Access Resources          |

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
