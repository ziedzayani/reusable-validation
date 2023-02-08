export const getValidatorErrorMessage = (validatorName: string, validatorErrorValue?: any): string|undefined => {

    let args = params.get(validatorName)?.map(name => validatorErrorValue[name]);
    return (args) ? stringFormat(messages.get(validatorName),...args) : messages.get(validatorName);
}

const  messages = new Map<string, string>([
    ['required', 'This field is required'],
    ['minlength', `Password must be at least {0} characters lon`],
    ['maxlength', `Password cannot be more than {0} characters long`],
    ['email', 'Email must be a valid email address'],
]);

const  params = new Map<string, string[]>([
    ['minlength', ['requiredLength']],
    ['maxlength', ['requiredLength','requiredLength']]
]);

function stringFormat(template: string|undefined, ...args: any[]) {
    if(template){
        return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined'
            ? args[index]
            : match;
        });
    }
    return undefined;
  }