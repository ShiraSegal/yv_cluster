import { Injectable, inject } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class ClusterBuilderService {
  // #newReservationService = inject(NewReservationService);
  // #formBuilder = inject(FormBuilder);
  // #dateFunctionsService = inject(DateFunctionsService);
  // buildBasicTourDetailsForm() {
  //   var form: FormGroup;
  //   this.#newReservationService.basicTourDetails$
  //     .subscribe((basicTourDetails) => {
  //       form = this.#formBuilder.group({
  //         numberOfVisitors: new FormControl<number>(basicTourDetails.numberOfVisitors,[Validators.min(1),Validators.max(90)]),
  //         partOfDay: new FormControl<PartsOfDayEnum>(basicTourDetails.partOfDay,[Validators.required]),
  //         startTime: new FormControl<string>(basicTourDetails.startTime,[Validators.required]),
  //         date: new FormControl<string>(this.#dateFunctionsService.getStringDateWithoutTime(new Date())),
  //         scheduleEventGuid: basicTourDetails.scheduleEventGuid
  //       });
  //     })
  //     .unsubscribe();
  //   return form!;
  // }
  // buildAdditionalTourDetailsForm() {
  //   var form: FormGroup;
  //   this.#newReservationService.additionalTourDetails$
  //     .subscribe((additionalTourDetails) => {
  //       form = this.#formBuilder.group({
  //         firstName: new FormControl<string>(additionalTourDetails.firstName,[Validators.required]),
  //         lastName: new FormControl<string>(additionalTourDetails.lastName,[Validators.required]),
  //         email: new FormControl<string>(additionalTourDetails.email,[Validators.required, Validators.email]),
  //         phoneNumber: new FormControl<string>(additionalTourDetails.phoneNumber,[Validators.required,Validators.pattern('^([0-9\(\)\/\+ \-]*)$')]),
  //         isWithAudioGuide: new FormControl<boolean>(additionalTourDetails.isWithAudioGuide,[Validators.required]),
  //         audioGuideLanguage: new FormControl<string>(additionalTourDetails.audioGuideLanguage),
  //         audioGuideQuantity: new FormControl<number>(additionalTourDetails.audioGuideQuantity),
  //         isPrivicyPolicy: new FormControl<boolean>(additionalTourDetails.isPrivicyPolicy,[Validators.requiredTrue]),
  //         isReceivingNewsletterMessages: new FormControl<boolean>(additionalTourDetails.isReceivingNewsletterMessages),
  //       });
  //     })
  //     .unsubscribe(
  //   return form!;
  //}
}
