# ClientHub | Detailed Feature & Technical Specification

## 1. Global Platform Infrastructure
**ClientHub** is architected as a high-density, professional workspace for freelance studio operations. The platform is built on the **Kinetic Dark** design system, optimized for visual focus and long-session productivity.

### Global Navigation & Layout (SideNavBar)
- **Persistent Sidebar**: A 256px (w-64) fixed left-drawer providing instant access to the core studio modules.
- **Brand Identity**: High-contrast "ClientHub" wordmark with "Design Workspace" subtitle for studio branding.
- **Navigation Logic**: Interactive list with active-state indicators (indigo border-left and high-surface background).
- **Global CTA**: "Upgrade Plan" or "Add New Client" primary triggers located in prominent vertical slots.
- **Account Controls**: Bottom-docked profile and settings access for administrative tasks.

### Utility & Information Bar (TopAppBar)
- **Smart Search**: Context-aware global search bar with focus-ring feedback for rapid retrieval of clients, project IDs, or invoice numbers.
- **Notification Engine**: Real-time alert system with visual "unread" indicators for system events and messages.
- **Quick Action**: Primary indigo "Add New" button pattern consistently placed in the top-right quadrant across all screens.
- **User Identity**: Persistent circular avatar for current session user with studio role confirmation.

---

## 2. Main Workspace (Dashboard Overview)
The centralized command center for monitoring studio health and immediate priorities.

### High-Impact Summary Metrics (Stat Cards)
- **Total Clients**: Real-time counter with percentage growth indicators (+12%) and trend direction icons.
- **Active Projects**: Total count of ongoing engagements with "Stable" or "Fluctuating" status flags.
- **Pending Payments**: Aggregated dollar value of all outstanding invoices with a comparison against last month's performance.
- **Urgent Deadlines**: Countdown of projects requiring immediate action within the next 48-72 hours.

### Studio Performance Analytics
- **Revenue Overview**: Interactive bar chart tracking 6 months of gross earnings. Includes hover-triggered tooltips showing exact dollar amounts per month (e.g., $9.8k in June).
- **Status Lifecycle**: Color-coded progress tracking (Planning, In Progress, Review, Completed).

### Operational Feed
- **Recent Activity**: Vertical chronological stream of system-wide events (Invoice Sent, Message Received, File Uploaded, Client Added).
- **Actionable Priority List**: "Upcoming Deadlines" table featuring:
    - **Project Identity**: Logo/Initial mark and project name.
    - **Due Date**: Formatted date with "Urgent" or "In Progress" badges.
    - **Progress Tracking**: 8px height progress bars indicating percentage completion.

---

## 3. Client Records (Master Directory)
A robust CRM interface for managing the studio's client base and contact hierarchy.

### Advanced Data Table Features
- **Client Identity**: Multi-column view including avatars, company names, and primary contact emails.
- **Lifecycle Mapping**: Status badges for 'Active', 'Lead', 'On Hold', and 'Completed' clients.
- **Financial Mapping**: Quick-glance total revenue generated per client and current balance status.
- **Interaction Tools**: Row-level action menus (More Vert) for editing, archiving, or viewing detailed profiles.

### Filtering & Search Architecture
- **Multi-parameter Search**: Search by company, person, or specific project tag.
- **Segmented Views**: Tabbed filtering to view 'All Clients', 'Active Only', or 'Prospects'.

---

## 4. Operations (Project Management)
A visual dashboard for tracking the lifecycle of all creative engagements.

### Kanban-Lite Project Cards
- **Status Badges**: High-visibility headers indicating 'In Progress', 'Review', or 'Completed'.
- **Progress Visualization**: Linear indigo progress bars showing % completion.
- **Collaborator Avatars**: Stacked avatar groups showing team or client members assigned to the project.
- **Deadlines**: "Due Date" markers with calendar icons for temporal awareness.

### Interactive Creation Flow
- **Empty State "Start New Project"**: A dedicated dashed-border card with a central "+" trigger to initiate a new workspace.
- **Project Activity Sidebar**: A localized feed of project-specific updates, file uploads, and feedback received.

---

## 5. Financial Center (Invoices & Billing)
The studio's financial hub for managing cash flow and billing cycles.

### Financial Performance Snapshots
- **Total Outstanding**: Aggregate of all 'Pending' and 'Overdue' invoices.
- **Monthly Settlement**: Total revenue collected within the current 30-day window.
- **Efficiency Metric**: "Average Payment Time" tracking how fast clients settle their accounts (e.g., 14 Days).

### Professional Ledger (Invoice Table)
- **Invoice IDs**: Unique alphanumeric tracking (e.g., #INV-2024-001).
- **Semantic Status**: Semi-transparent, color-coded badges (Paid/Green, Overdue/Red, Pending/Amber).
- **Download/View Actions**: Dedicated icons for generating PDF exports or viewing the live invoice web-view.
- **Pagination**: Standardized footer pagination for navigating large financial histories.

---

## 6. Time Tracker (Calendar & Deadlines)
A temporal view of the studio's commitments and capacity.

### Multi-View Calendar Engine
- **Grid View**: A standard 7-column month layout for broad deadline planning.
- **Interaction Logic**: Selected date highlighting (Indigo border) with a detailed side-panel update.

### Daily Schedule & Planning
- **Detailed Timeline**: A vertical view of the selected day's meetings (e.g., "Budget Review") and project deadlines (e.g., "UI Design Refactor").
- **Quick Action Triggers**: "New Task" and "Join Meet" buttons for rapid transition between planning and execution.
- **Capacity Indicator**: A "Monthly Capacity" widget (e.g., 82%) to prevent over-scheduling and manage freelancer burnout.

---

## 7. Collaboration Hub (Client Messages)
A centralized communication channel supporting direct collaboration.

### Thread Management
- **Contact List**: Vertical list of active conversations with "Online" status indicators and "Last Message" timestamps.
- **Search Threads**: Localized search for finding specific conversation history.

### Communication Interface
- **Rich Chat View**: Support for text, file attachments (PDFs, wireframes), and image previews.
- **File Repository**: Integrated "Layout_Feedback.pdf" style attachments within the message bubble flow.
- **Input Controls**: Support for emojis, image uploads, and file attachments with a primary "Send" trigger.

---

## 8. Technical Design System: Kinetic Dark
The visual and structural foundation of the platform.

### Color Tokens
- **Surface**: `#131316` (Deep Charcoal)
- **Surface Low**: `#1B1B1E` (Elevated Cards)
- **Surface High**: `#2A2A2D` (Active Items)
- **Primary (Accent)**: `#6366F1` / `#C0C1FF` (Electric Indigo)
- **Success**: `#4ADE80` (Green)
- **Error**: `#FB7185` (Coral/Red)
- **Border**: `#2A2B2F` (Subtle Slate)

### Typography (Inter)
- **Headlines**: Semi-bold to Bold weights with tight letter-spacing for professional density.
- **Labels**: Uppercase with tracking (+0.05em) for category identification.
- **Body**: Optimized line-height (1.5) for readability during long sessions.

### Layout Specs
- **Grid**: 12-column responsive layout.
- **Gutter**: 24px (Standard spacing between cards).
- **Rounding**: 8px (Round Eight) standard for all containers and buttons.
- **Effects**: "Indigo Glow" soft box-shadows (rgba(99, 102, 241, 0.15)) for primary actions.
