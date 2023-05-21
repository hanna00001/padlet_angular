export class ErrorMessages {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }

}

export const PadletFormErrorMessages = [
  new ErrorMessages('content', 'required', 'Ein Text muss vergeben werden'),
  new ErrorMessages('title', 'required', 'Ein Titel muss angeben werden'),
  new ErrorMessages('name', 'required', 'Ein Name muss vergeben werden'),
  new ErrorMessages('comment', 'required', 'Ein Comment muss vergeben werden'),
  new ErrorMessages('rating', 'required', 'Es muss ein Rating mit max. 5 Sternen vergeben werden'),
];
