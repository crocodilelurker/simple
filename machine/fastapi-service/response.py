from fastapi.responses import JSONResponse
from typing import Any,Optional

def api_responses (
    status_code:int,
    message:str,
    body:Optional[Any] = None
)->JSONResponse:
    content = {
        "success": 200 <= status_code < 300,
        "message":message,
        "data":body if body is not None else {}
    }

    return JSONResponse(content = content,status_code=status_code)