package team02.issue_tracker;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class IssueTrackerApplicationTests {

	@Autowired
	DefaultListableBeanFactory defaultListableBeanFactory;

	@DisplayName("등록된 빈 목록을 조회합니다.")
	@Test
	void contextLoads() {
		int i = 1;
		for (String beanDefinitionName : defaultListableBeanFactory.getBeanDefinitionNames()) {
			System.out.println(i++ + " : " + beanDefinitionName);
			System.out.println(defaultListableBeanFactory.getBean(beanDefinitionName).getClass().getName());
		}
	}
}
