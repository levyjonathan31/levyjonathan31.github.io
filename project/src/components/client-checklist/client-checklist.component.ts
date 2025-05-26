import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSelectionList, MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-client-checklist',
  imports: [CommonModule, MatListModule, MatSelectionList, MatListOption],
  templateUrl: './client-checklist.component.html',
  styleUrl: './client-checklist.component.css'
})
export class ClientChecklistComponent {

  checklist = [
    { label: "Mortgage Pre-approval (ASAP)", completed: false },
    { label: "Sellers Disclosure (ASAP)", completed: false },
    { label: "Contract Fully Executed (Clock Starts)", completed: false },
    { label: "Change MLS Status to Pending", completed: false },
    { label: "Confirm Real Estate Taxes (Loan Officer)", completed: false },
    { label: "Home Owners Insurance Quote (Loan Officer)", completed: false },
    { label: "Confirm HOA Payment (Loan Officer)", completed: false },
    { label: "Ordered Wiring Instructions (ASAP)", completed: false },
    { label: "Received Wiring Instructions", completed: false },
    { label: "Initial Escrow Deposit (ASAP)", completed: false },
    { label: "Mortgage Application (Within 5 days)", completed: false },
    { label: "Title Ordered (Listings only)", completed: false },
    { label: "HOA/Condo Docs (Ordered/Requested Within 1 Day)", completed: false },
    { label: "HOA/Condo Application & Fee (Within 1 Day)", completed: false },
    { label: "HOA/Condo Interview (Verify with association)", completed: false },
    { label: "Ordered Home Inspection (Within 1-15 Days)", completed: false },
    { label: "Inspection Negotiation (Within 1-15 Days)", completed: false },
    { label: "Inspection Deadline (Within 1-15 Days)", completed: false },
    { label: "Mold Inspection (Within 1-15 Days)", completed: false },
    { label: "Termite Inspection (Within 1-15 Days)", completed: false },
    { label: "Re-Inspections (As Needed)", completed: false },
    { label: "Release and Cancellation (As Needed)", completed: false },
    { label: "Additional Escrow Deposit (As Needed)", completed: false },
    { label: "Appraisal (Ordered by lender)", completed: false },
    { label: "Obtain Appraisal Values (Approximately 14-21 Days)", completed: false },
    { label: "Mortgage Commitment (Within 30 days)", completed: false },
    { label: "Survey (ordered by title company - 5 days prior close)", completed: false },
    { label: "Title Commitment (10 days prior close)", completed: false },
    { label: "Select Insurance (10 days prior closing)", completed: false },
    { label: "Remind Buyer to Set Up Utilities (10 days prior to close)", completed: false },
    { label: "Mortgage Clear-to-Close (10 days before closing)", completed: false },
    { label: "External Escrow Disbursement (1 week prior close)", completed: false },
    { label: "HOA/COA Approval Certificate (5 Days Before Closing)", completed: false },
    { label: "TRID (3 Days prior to closing)", completed: false },
    { label: "Wire Closing Funds (48 hours prior)", completed: false },
    { label: "Approve Settlement Statement (48 hours prior)", completed: false },
    { label: "Prepare Credentials For Closing", completed: false },
    { label: "Confirm Closing Time", completed: false },
    { label: "Confirm Title Company", completed: false },
    { label: "Signed Disclosures", completed: false },
    { label: "Confirm Company Name Chk", completed: false },
    { label: "Check Permit Department", completed: false },
    { label: "Judgment or Leans?", completed: false },
    { label: "Walk Thru Inspection (Day Of Closing)", completed: false },
    { label: "Sign Closing Documents (Day Of Closing)", completed: false },
    { label: "Obtain Closing Documents (Copy)", completed: false },
    { label: "Collect Final Proceeds (Day Of Closing)", completed: false },
    { label: "House Keys (Day Of Closing)", completed: false },
    { label: "Garage Door Openers (Day Of Closing)", completed: false },
    { label: "Gate Bar Codes (Day Of Closing)", completed: false },
    { label: "Postal Keys (Day Of Closing)", completed: false },
    { label: "Gate Access (Day Of Closing)", completed: false },
    { label: "Gate Remotes (Day Of Closing)", completed: false },
    { label: "Closed (Start Compliance Procedures)", completed: false },
    { label: "Close Listing on MLS", completed: false }
  ];
}
