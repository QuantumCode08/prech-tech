# 🧪 QA Observations & Issues

## 🚫 Functional Issues

### 1. Cart Quantity Resets to 0 When Exceeding 5
- **Steps to Reproduce**:
  - Navigate to a product detail page
  - Select a quantity greater than 5
  - Click on "Add to Cart"
- **Issue**:  
  - The quantity on the cart page resets to **0** instead of reflecting the selected value.
- **Expected Behavior**:  
  - Either prevent selecting more than 5 or show an error message. The cart should never show `0` unless explicitly removed.

---

### 2. Address Page Does Not Pre-fill Logged-In User Data
- **Issue**:  
  - Even when a user is logged in, fields like First Name, Email, etc., remain **empty** on the checkout address page.
- **Expected Behavior**:  
  - Logged-in user details should automatically populate the relevant form fields to improve user experience and reduce redundant typing.

---

### 3. Phone Number Field Accepts Invalid Input
- **Issue**:  
  - The phone number field allows entry of letters and special characters (e.g., `abc`, `!!!`, `123abc`).
- **Expected Behavior**:  
  - Input should be restricted to **numeric characters only**, optionally supporting phone number formatting.

---

### 4. "Continue to Payment" Button Allows Invalid Submission
- **Issue**:  
  - The button is clickable even when:
    - Required fields are left empty
    - Fields contain invalid data
- **Expected Behavior**:  
  - The form should block submission with appropriate validation messages until all required fields are correctly filled.

---
