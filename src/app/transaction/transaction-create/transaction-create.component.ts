import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransactionDetail } from '../transaction-detail/transactionDetail';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private transactionService: TransactionService
  ) {

  }

  createTransaction(newTransaction: TransactionDetail) {
    console.warn("El transaction fue creado", newTransaction);
    this.transactionService.createTransaction(newTransaction).subscribe(transaction => {
      this.showSuccess(transaction);
    });

    this.transactionForm.reset();

  }

  showSuccess(t: TransactionDetail) {
    this.toastr.success('Creado exitosamente!', `${t.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.transactionForm.reset();
  }

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      payment: ["", [Validators.required, Validators.minLength(4)]],
      value: ["", Validators.required],
      creationDate: ["", Validators.required],
      username: ["", [Validators.required, Validators.minLength(4)]],
    });
  }
}
