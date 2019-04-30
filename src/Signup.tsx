import React, { Component } from "react";
export default function Signup () {
    return <form>
            <div className="form-group">
                <label>E-mail:</label>
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" />
            </div>
            <div className="form-group">
                <label>Re-enter Password:</label>
                <input type="password" className="form-control" />
            </div>
        </form>
}