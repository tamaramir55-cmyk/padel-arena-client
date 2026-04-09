import React, { useState, useEffect } from "react";
import useCreateUser from "../../hooks/useCreateUser";
import Modal from "../Modal";
import "./style.css";
import { toast } from "react-toastify";
import API_BASE_URL from "../../utils/api-base";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toastError, toastSuccess } from "../../utils/toasts";

export interface SignUpModalProps {
  open: boolean;
  onClose: () => void;
  mode?: "login" | "signup";
}

type Mode = "login" | "signup";

type AuthForm = {
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
};

const SignUpModal: React.FC<SignUpModalProps> = ({ open, onClose, mode }) => {
  const [currentMode, setCurrentMode] = useState<Mode>(mode ?? "login");
  useEffect(() => setCurrentMode(mode ?? "login"), [mode]);

  const [form, setForm] = useState<AuthForm>({
    email: "",
    firstName: "",
    lastName: "",
    passwordHash: "",
  });
  const { createUser, loading, error } = useCreateUser();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  async function submitSignup(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    if (!form.passwordHash || form.passwordHash.length < 6) {
      toastError("הססמא חייבת לכלול 6 תווים לפחות");
      return;
    }

    try {
      await createUser({
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        passwordHash: form.passwordHash,
      });
      toastSuccess("נוצר משתמש בהצלחה");
      onClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      toastError(message || "שגיאה ביצירת משתמש");
    }
  }

  async function submitLogin(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    try {
      const resp = await fetch(`${API_BASE_URL || ""}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          passwordHash: form.passwordHash,
        }),
      });

      if (resp.ok) {
        toastSuccess("התחברת בהצלחה");
        onClose();
      } else {
        const body = (await resp.json().catch(() => null)) as unknown;
        let message = "Login failed";
        if (
          body &&
          typeof body === "object" &&
          "message" in (body as Record<string, unknown>)
        ) {
          const m = (body as { message?: unknown }).message;
          if (typeof m === "string") message = m;
        }
        throw new Error(message);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      toastError(message || "שגיאה בהתחברות");
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
                      value={form.passwordHash}
                      onChange={(e) =>
                        setForm({ ...form, passwordHash: e.target.value })
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
                      value={form.passwordHash}
                      onChange={(e) =>
                        setForm({ ...form, passwordHash: e.target.value })
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
