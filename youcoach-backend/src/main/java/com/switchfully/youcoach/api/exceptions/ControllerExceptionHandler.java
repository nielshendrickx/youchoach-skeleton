package com.switchfully.youcoach.api.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {

//    <<<<<<<<<<<<TEMPLATE>>>>>>>>>>>>>>
//    private final Logger loggerMember = LoggerFactory.getLogger(MemberController.class);

//    @ExceptionHandler(EmailNotValidException.class)
//    protected void emailNotValidException(EmailNotValidException ex, HttpServletResponse response) throws IOException {
//        loggerMember.error("Email is not valid!", ex);
//        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
//    }
}
