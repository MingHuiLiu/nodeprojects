<%@ page contentType="text/html;charset=utf-8" %><%@ taglib uri="/fis" prefix="fis"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<fis:extends name="page/layout/frame.jsp">

    <fis:block name="body">

        <fis:block name="header">
            <fis:widget name="widget/header/header.jsp" />
        </fis:block>

        <div id="middle" class="container">
            <div class="row">
                <div class="col-md-9">
                    <c:if test="hello">
                        <div class="page-header">
                            <h1>hello<c:if test="hello"><small>hello</small></c:if></h1>
                        </div>
                    </c:if>
                    <div id="content"><fis:block name="content"></fis:block></div>
                </div>
                <div class="col-md-3"><fis:block name="sidebar"></fis:block></div>
            </div>
        </div>

        <fis:block name="footer">
            <fis:widget name="widget/footer/footer.jsp" />
        </fis:block>

    </fis:block>
 
  <%-- auto inject by fis3-preprocess-extlang--%>
  <fis:require name="page/layout/2columns-with-right-sidebar.jsp" />
</fis:extends>
