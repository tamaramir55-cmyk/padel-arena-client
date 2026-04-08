import React, { useState, useEffect } from "react";
import useCreateUser from "../../hooks/useCreateUser";
import Modal from "../Modal";
import "./style.css";
import { toast } from "react-toastify";
import { API_BASE } from "../../utils/api-base";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toastError, toastSuccess } from "../../utils/toasts";

const SignUpModal = ({
  open,
  onClose,
  mode,
}: {
  open: any;
  onClose: any;
  mode?: "login" | "signup";
}) => {
  const [currentMode, setCurrentMode] = useState("login" as any);
  useEffect(() => setCurrentMode(mode || "login"), [mode]);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { createUser, loading, error } = useCreateUser();
  const [showPassword, setShowPassword] = useState(false);

  async function submitSignup(e: any) {
    e.preventDefault();
    if (!form.password || form.password.length < 6) {
      toastError("הססמא חייבת לכלול 6 תווים לפחות");
      return;
    }

    try {
      await createUser({
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
      } as any);
      toastSuccess("נוצר משתמש בהצלחה");
      onClose();
    } catch (err: any) {
      toastError(err?.message || "שגיאה ביצירת משתמש");
    }
  }

  async function submitLogin(e: any) {
    e.preventDefault();
    try {
      const resp = await fetch(`${API_BASE || ""}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (resp.ok) {
        toastSuccess("התחברת בהצלחה");
        onClose();
      } else {
        const body = await resp.json().catch(() => null);
        throw new Error(body?.message || "Login failed");
      }
    } catch (err: any) {
      toastError(err?.message || "שגיאה בהתחברות");
    }
  }

  return (
    <Modal open={open} onClose={onClose} ariaLabel="Auth">
      <div className="signup-card card auth-modal" dir="rtl">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="auth-inner">
          <div className="auth-header">
            <h3 className="signup-title">
              {currentMode === "login" ? "התחברות" : "הרשמה ל- 10PadelArena"}
            </h3>
            <p className="signup-sub">
              {currentMode === "login"
                ? "התחבר לחשבון שלך"
                : "צור חשבון חדש כדי להירשם לתחרויות"}
            </p>
          </div>

          <div className={`auth-content ${currentMode}`}>
            {currentMode === "login" ? (
              <form onSubmit={submitLogin} className="signup-form login-form">
                <label className="field">
                  <span className="label-text">אימייל</span>
                  <input
                    name="email"
                    placeholder={"example@domain.com"}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </label>
                <label className="field">
                  <span className="label-text">סיסמה</span>
                  <div className="password-row">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder={"סיסמה"}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="pwd-toggle"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label="Toggle password"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </label>

                <div className="actions">
                  <button type="submit" className="btn-primary">
                    התחבר
                  </button>
                </div>

                <div className="auth-toggle">
                  אין חשבון?{" "}
                  <button
                    type="button"
                    className="toggle-link"
                    onClick={() => setCurrentMode("signup")}
                  >
                    צור חשבון
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={submitSignup}
                className="signup-form signup-form--full"
              >
                <label className="field">
                  <span className="label-text">שם פרטי</span>
                  <input
                    name="firstName"
                    placeholder="שם פרטי"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  />
                </label>
                <label className="field">
                  <span className="label-text">שם משפחה</span>
                  <input
                    name="lastName"
                    placeholder="שם משפחה"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                  />
                </label>
                <label className="field">
                  <span className="label-text">אימייל</span>
                  <input
                    name="email"
                    placeholder={"example@domain.com"}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </label>

                <label className="field">
                  <span className="label-text">סיסמה</span>
                  <div className="password-row">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder={"סיסמה"}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="pwd-toggle"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label="Toggle password"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </label>

                <div className="actions">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                  >
                    {loading ? "שולח..." : "צור משתמש"}
                  </button>
                </div>

                <div className="auth-toggle">
                  כבר יש לך חשבון?{" "}
                  <button
                    type="button"
                    className="toggle-link"
                    onClick={() => setCurrentMode("login")}
                  >
                    התחברות
                  </button>
                </div>

                {error && <div className="form-error">{String(error)}</div>}
              </form>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
