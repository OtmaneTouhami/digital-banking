package ma.enset.digitalbanking.dtos;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ma.enset.digitalbanking.enums.AccountStatus;

import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
public class SavingBankAccountDTO extends BankAccountDTO {
    private String id;
    private double balance;
    private Date createdAt;
    private AccountStatus status;
    private CustomerDTO customerDTO;
    private double interestRate;
}