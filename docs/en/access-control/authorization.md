# Authorization & Permission Management

## Access Control Model

BAUER GROUP employs a role-based access control (RBAC) model:

| Principle | Implementation |
|-----------|---------------|
| **Least Privilege** | Every account receives only the minimum necessary permissions |
| **Need-to-Know** | Data access only on business necessity |
| **Separation of Duties** | Critical operations require multiple persons |
| **Default Deny** | No access without explicit authorization |

## Role Definitions

| Role | Permissions | Granted by |
|------|------------|------------|
| **User** | Access to assigned applications and data | Supervisor + IT |
| **Developer** | Code repositories, staging environments, CI/CD | Team lead + IT |
| **Administrator** | System configuration, user management, monitoring | ISO + IT Lead |
| **Root / Superadmin** | Full access to infrastructure | IT Lead only, four-eyes principle |

## Permission Lifecycle

### Grant

1. Request by employee or supervisor
2. Approval by responsible data/system owner
3. Implementation by IT
4. Documentation in the permission inventory

### Change

1. On role change: revoke old permissions, grant new permissions
2. Deadline: within 5 business days of role change
3. Review of old permissions by supervisor

### Revocation (Offboarding)

| Step | Deadline | Responsible |
|------|----------|-------------|
| Account deactivation | On last working day, before end of work | IT |
| Email forwarding | Set up to delegate (time-limited) | IT |
| Shared credentials | Rotation of all shared access credentials | IT + Department |
| Hardware return | On last working day | Supervisor |
| VPN / remote access | Immediate deactivation | IT |

## Authorization Audit

| Review | Interval | Action |
|--------|----------|--------|
| Full permission review | Semi-annually | Each system owner reviews permissions for their systems |
| Orphaned accounts | Monthly (automated) | Deactivation of accounts without a corresponding active employee |
| Privileged accounts | Quarterly | Review of all admin permissions for necessity |
| Service accounts | Semi-annually | Owner confirms necessity and scope |
