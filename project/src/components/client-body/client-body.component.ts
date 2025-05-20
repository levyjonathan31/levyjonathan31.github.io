import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-client-body',
  imports: [
    CommonModule,
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    TextFieldModule,
    MatMenuModule,
  ],
  templateUrl: './client-body.component.html',
  styleUrl: './client-body.component.css'
})
export class ClientBodyComponent {
  fields = [
    { key: 'contact_1', label: 'Contact 1 Full Name', type: 'text' },
    { key: 'contact_2', label: 'Contact 2 Full Name', type: 'text' },
    { key: 'email', label: 'Email Address', type: 'email' },
    { key: 'phone', label: 'Phone Number', type: 'text' },
    { key: 'property_control_number', label: 'Property Control Number', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'New', value: 'New' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Qualified', value: 'Qualified' },
        { label: 'Client', value: 'Client' },
        { label: 'Closed Won', value: 'Closed Won' },
        { label: 'Closed Lost', value: 'Closed Lost' }
      ]
    },
    {
      key: 'lead_source',
      label: 'Lead Source',
      type: 'select',
      options: [
        { label: 'Referral', value: 'Referral' },
        { label: 'Website', value: 'Website' },
        { label: 'Social Media', value: 'Social Media' },
        { label: 'Advertisement', value: 'Advertisement' },
        { label: 'Other', value: 'Other' }
      ]
    },
    {
      key: 'income_type',
      label: 'Income Type',
      type: 'select',
      options: [
        { label: 'W-2', value: 'w2' },
        { label: '1099', value: '1099' },
        { label: 'Business Owner', value: 'business_owner' }
      ]
    },
    {
      key: 'credit_score_range',
      label: 'Credit Score Range',
      type: 'select',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' }
      ]
    },
    {
      key: 'background_check',
      label: 'Background Check',
      type: 'select',
      options: [
        { label: 'Excellent', value: 'excellent' },
        { label: 'Good', value: 'good' },
        { label: 'Fair', value: 'fair' }
      ]
    }
  ];

  folders = [
    { title: "Buyers Agreement", status: 'done' },
    { title: "Brokers Compensation Agreement", status: 'in-progress' },
    { title: "Sellers Listing Agreement", status: 'needs-review' },
    { title: "Sellers Listing Modification", status: 'done' },
    { title: "Buyers Contract", status: 'in-progress' },
    { title: "Buyers Addendums", status: 'needs-review' },
    { title: "Buyers Escrow Deposit Verification", status: 'done' },
    { title: "Sellers Disclosure", status: 'in-progress' },
    { title: "Sellers Lead-Based Paint Disclosure", status: 'needs-review' },
    { title: "HOAs Rider", status: 'done' },
    { title: "Associations HOPA Disclosure", status: 'in-progress' },
    { title: "Associations Approval", status: 'needs-review' },
    { title: "Buyers Legal Docs", status: 'done' },
    { title: "Titles Documents", status: 'in-progress' },
    { title: "Buyers Closing Disclosure", status: 'needs-review' },
    { title: "Buyers Final Walkthrough", status: 'done' },
    { title: "Brokers Commission Request", status: 'in-progress' },
    { title: "Brokers Deposit", status: 'needs-review' },
    { title: "Brokers Check", status: 'done' },
    { title: "Agents Check", status: 'in-progress' },
  ];

  checklist = [
    { label: 'Initial Contact', completed: false, sequence: 1 },
    { label: 'Document Collection', completed: false, sequence: 2 },
    { label: 'Background Check', completed: false, sequence: 3 },
    { label: 'Credit Score Review', completed: false, sequence: 4 },
    { label: 'Income Verification', completed: false, sequence: 5 },
    { label: 'Property Inspection', completed: false, sequence: 6 },
    { label: 'Appraisal', completed: false, sequence: 7 },
    { label: 'Underwriting', completed: false, sequence: 8 },
    { label: 'Approval', completed: false, sequence: 9 },
    { label: 'Final Review', completed: false, sequence: 10 },
    { label: 'Closing', completed: false, sequence: 11 }
  ];
}

