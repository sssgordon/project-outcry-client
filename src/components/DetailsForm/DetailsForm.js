import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./DetailsForm.css";

export default function DetailsForm(props) {
  return (
    <div id="details-wrapper-parent">
      <div id="details-wrapper">
        <div id="details-form-wrapper">
          <Form onSubmit={props.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="hkIdNumber">
                <Form.Label>香港身分證號碼</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="hkIdNumber"
                  value={props.values.hkIdNumber}
                  placeholder="HKID number"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="dateOfBirth">
                <Form.Label>出生日期</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  value={props.values.dateOfBirth}
                  name="dateOfBirth"
                  type="date"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="address">
                <Form.Label>住宅地址</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="address"
                  value={props.values.address}
                  placeholder="Home address"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="gender">
                <Form.Label>性別</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="gender"
                  value={props.values.gender}
                  placeholder="M / F"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="phoneNumber">
                <Form.Label>電話號碼</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="phoneNumber"
                  value={props.values.phoneNumber}
                  placeholder="Phone number"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="emailPassword">
                <Form.Label>電郵密碼</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="emailPassword"
                  value={props.values.emailPassword}
                  placeholder="Gmail password"
                  type="password"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="emergencyContact">
                <Form.Label>緊急聯絡人</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="emergencyContact"
                  value={props.values.emergencyContact}
                  placeholder="Emergency contact relation"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="emergencyContactNumber">
                <Form.Label>聯絡號碼</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="emergencyContactNumber"
                  value={props.values.emergencyContactNumber}
                  placeholder="Contact number"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="lawyerEmail">
                <Form.Label>律師電郵</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="lawyerEmail"
                  value={props.values.lawyerEmail}
                  placeholder="Lawyer email"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="otherEmail">
                <Form.Label>其他電郵</Form.Label>
                <Form.Control
                  onChange={props.onChange}
                  name="otherEmail"
                  value={props.values.otherEmail}
                  placeholder="Other email"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
