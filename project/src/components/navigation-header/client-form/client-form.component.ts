import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-form',
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
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

  constructor(private dialogRef: MatDialogRef<ClientFormComponent>) { }
  onClose() {
    this.dialogRef.close();
  }
}
